import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitacionesController } from './habitaciones.controller';
import { HabitacionesService } from './habitaciones.service';
import { Habitacion } from './entidades/habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habitacion])],
  controllers: [HabitacionesController],
  providers: [HabitacionesService],
})
export class HabitacionesModule {}
