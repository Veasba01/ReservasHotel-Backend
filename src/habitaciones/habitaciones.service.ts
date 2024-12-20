import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habitacion } from './entidades/habitacion.entity';

@Injectable()
export class HabitacionesService {
  constructor(
    @InjectRepository(Habitacion)
    private readonly habitacionRepository: Repository<Habitacion>,
  ) {}

  findAll(): Promise<Habitacion[]> {
    return this.habitacionRepository.find();
  }

  findOne(id: number): Promise<Habitacion> {
    return this.habitacionRepository.findOneBy({ id });
  }

  create(habitacionData: Partial<Habitacion>): Promise<Habitacion> {
    const habitacion = this.habitacionRepository.create(habitacionData);
    return this.habitacionRepository.save(habitacion);
  }

  async updateEstado(id: number, estado: 'disponible' | 'reservada'): Promise<Habitacion> {
    const habitacion = await this.findOne(id);
    if (!habitacion) {
      throw new NotFoundException(`Habitación con ID ${id} no encontrada`);
    }
    habitacion.estado = estado;
    return this.habitacionRepository.save(habitacion);
  }
}
