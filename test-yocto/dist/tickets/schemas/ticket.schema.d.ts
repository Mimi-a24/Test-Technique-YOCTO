import { Document } from 'mongoose';
export declare type TicketDocument = Ticket & Document;
export declare class Ticket {
    titre: string;
    description: string;
}
export declare const TicketSchema: import("mongoose").Schema<Document<Ticket, {}>, import("mongoose").Model<any, any>, undefined>;
