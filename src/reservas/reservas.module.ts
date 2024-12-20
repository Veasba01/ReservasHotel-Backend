import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservasController } from './reservas.controller';
import { ReservasService } from './reservas.service';
import { Reserva } from './entidades/reserva.entity';
import { Habitacion } from '../habitaciones/entidades/habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva, Habitacion])],
  controllers: [ReservasController],
  providers: [ReservasService],
})
export class ReservasModule {}
