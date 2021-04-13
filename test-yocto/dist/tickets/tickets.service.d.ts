import { Ticket, TicketDocument } from './schemas/ticket.schema';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Model } from 'mongoose';
export declare class TicketsService {
    private readonly ticketModel;
    constructor(ticketModel: Model<TicketDocument>);
    createTicket(createTicketDto: CreateTicketDto): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    modifyTicket(ticketId: string, newData: CreateTicketDto): Promise<TicketDocument>;
    deleteTicket(ticketId: string): Promise<any>;
}
