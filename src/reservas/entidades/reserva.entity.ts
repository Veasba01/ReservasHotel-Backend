import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Habitacion } from '../../habitaciones/entidades/habitacion.entity';

@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Habitacion)
  @JoinColumn({ name: 'habitacionId' })
  habitacion: Habitacion;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  telefono: string;

  @Column()
  email: string;

  @Column({ default: 'pendiente' })
  estado: 'pendiente' | 'confirmada' | 'cancelada';
}
