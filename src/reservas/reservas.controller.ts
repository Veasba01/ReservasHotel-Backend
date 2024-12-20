import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { Reserva } from './entidades/reserva.entity';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Get()
  findAll() {
    return this.reservasService.findAll();
  }

  @Post()
  create(@Body() reservaData: Partial<Reserva>) {
    return this.reservasService.create(reservaData);
  }

  @Get('ocupadas/:habitacionId')
  obtenerFechasOcupadas(@Param('habitacionId') habitacionId: number) {
    return this.reservasService.obtenerFechasOcupadas(habitacionId);
  }
}
