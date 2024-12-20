import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Reserva } from './entidades/reserva.entity';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
  ) {}

  findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find({ relations: ['habitacion'] });
  }

  create(reservaData: Partial<Reserva>): Promise<Reserva> {
    const reserva = this.reservaRepository.create(reservaData);
    return this.reservaRepository.save(reserva);
  }

 // Función para obtener las fechas ocupadas de una habitación
 async obtenerFechasOcupadas(habitacionId: number): Promise<string[]> {
    const reservas = await this.reservaRepository.find({
      where: {
        habitacion: { id: habitacionId },
        estado: In(['pendiente', 'confirmada']),
      },
    });

    let fechasOcupadas: string[] = [];

    reservas.forEach((reserva) => {
      let fechaActual = new Date(reserva.fechaInicio);
      const fechaFin = new Date(reserva.fechaFin);

      while (fechaActual <= fechaFin) {
        fechasOcupadas.push(fechaActual.toISOString().split('T')[0]);
        fechaActual.setDate(fechaActual.getDate() + 1);
      }
    });

    return fechasOcupadas;
  }
}
