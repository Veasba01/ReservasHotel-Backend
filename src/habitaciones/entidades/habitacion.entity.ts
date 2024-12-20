import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('habitaciones')
export class Habitacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  numero: string;

  @Column()
  tipo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column({ default: 'disponible' })
  estado: 'disponible' | 'reservada';
}
