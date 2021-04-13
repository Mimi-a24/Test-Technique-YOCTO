import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketsService } from './tickets.service';
import { Ticket } from './schemas/ticket.schema';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    createTicket(createTicketDto: CreateTicketDto): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    modifyTicket(res: any, ticketId: string, newData: CreateTicketDto): Promise<any>;
    deleteTicket(res: any, ticketId: string): Promise<any>;
}
