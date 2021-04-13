import { Ticket, TicketDocument } from './schemas/ticket.schema';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name) private readonly ticketModel: Model<TicketDocument>,
  ) {}

  async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const createdTicket = new this.ticketModel(createTicketDto);
    return createdTicket.save();
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }

  async modifyTicket(ticketId: string, newData: CreateTicketDto) {
    try {
      const modifiedTicket = await this.ticketModel.findById(ticketId);
      await modifiedTicket.updateOne(newData)
      return await this.ticketModel.findById(ticketId);
    } catch {
      return null;
    }
  }

  async deleteTicket(ticketId: string): Promise<any> {
    try {
      const deletedticket = await this.ticketModel.findById(ticketId);
      return await deletedticket.delete();
    } catch {
      return null
    }
  }
}