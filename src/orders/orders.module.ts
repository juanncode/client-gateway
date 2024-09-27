import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDER_SERVICE } from 'src/config/services';
import { envs } from 'src/config/envs';
import { NatsModule } from 'src/transport/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    NatsModule
  ]
})
export class OrdersModule {}
