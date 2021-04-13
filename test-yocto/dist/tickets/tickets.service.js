"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsService = void 0;
const ticket_schema_1 = require("./schemas/ticket.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TicketsService = class TicketsService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async createTicket(createTicketDto) {
        const createdTicket = new this.ticketModel(createTicketDto);
        return createdTicket.save();
    }
    async findAll() {
        return this.ticketModel.find().exec();
    }
    async modifyTicket(ticketId, newData) {
        try {
            const modifiedTicket = await this.ticketModel.findById(ticketId);
            await modifiedTicket.updateOne(newData);
            return await this.ticketModel.findById(ticketId);
        }
        catch (_a) {
            return null;
        }
    }
    async deleteTicket(ticketId) {
        try {
            const deletedticket = await this.ticketModel.findById(ticketId);
            return await deletedticket.delete();
        }
        catch (_a) {
            return null;
        }
    }
};
TicketsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(ticket_schema_1.Ticket.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TicketsService);
exports.TicketsService = TicketsService;
//# sourceMappingURL=tickets.service.js.map