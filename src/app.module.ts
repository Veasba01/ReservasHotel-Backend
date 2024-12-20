import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'hotel_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    HabitacionesModule,
    ReservasModule,
  ],
})
export class AppModule {}
