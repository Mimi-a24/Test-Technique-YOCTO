import { TicketsModule } from './tickets/tickets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';



@Module({
  imports: [MongooseModule.forRoot('mongodb://username:password@localhost:27017/'), TicketsModule],
})
export class AppModule {}
