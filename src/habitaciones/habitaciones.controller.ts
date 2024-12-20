import { Controller, Get, Post, Param, Patch, Body } from '@nestjs/common';
import { HabitacionesService } from './habitaciones.service';
import { Habitacion } from './entidades/habitacion.entity';

@Controller('habitaciones')
export class HabitacionesController {
  constructor(private readonly habitacionesService: HabitacionesService) {}

  @Get()
  findAll() {
    return this.habitacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.habitacionesService.findOne(id);
  }

  @Post()
  create(@Body() habitacionData: Partial<Habitacion>) {
    return this.habitacionesService.create(habitacionData);
  }

  @Patch(':id/estado')
  updateEstado(@Param('id') id: number, @Body('estado') estado: 'disponible' | 'reservada') {
    return this.habitacionesService.updateEstado(id, estado);
  }
}
