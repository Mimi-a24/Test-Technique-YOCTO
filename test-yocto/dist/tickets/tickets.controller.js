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
exports.TicketsController = void 0;
const common_1 = require("@nestjs/common");
const create_ticket_dto_1 = require("./dto/create-ticket.dto");
const swagger_1 = require("@nestjs/swagger");
const tickets_service_1 = require("./tickets.service");
class ResFormat {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ResFormat.prototype, "message", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ResFormat.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", create_ticket_dto_1.CreatedTicketDto)
], ResFormat.prototype, "ticket", void 0);
let TicketsController = class TicketsController {
    constructor(ticketsService) {
        this.ticketsService = ticketsService;
    }
    async createTicket(createTicketDto) {
        return await this.ticketsService.createTicket(createTicketDto);
    }
    async findAll() {
        return this.ticketsService.findAll();
    }
    async modifyTicket(res, ticketId, newData) {
        const modifiedTicket = await this.ticketsService.modifyTicket(ticketId, newData);
        var message = 'Ticket has been modified';
        var statusCode = common_1.HttpStatus.OK;
        if (modifiedTicket === null) {
            message = 'Ticket does not exist';
            statusCode = common_1.HttpStatus.NOT_FOUND;
        }
        return res.status(statusCode).json({
            message: message,
            _id: ticketId,
            modifiedTicket,
        });
    }
    async deleteTicket(res, ticketId) {
        const deletedTicket = await this.ticketsService.deleteTicket(ticketId);
        var message = 'Ticket has been deleted';
        var statusCode = common_1.HttpStatus.OK;
        if (deletedTicket === null) {
            message = 'Ticket does not exist';
            statusCode = common_1.HttpStatus.NOT_FOUND;
        }
        return res.status(statusCode).json({
            message: message,
            deletedTicket,
        });
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiBody({ type: create_ticket_dto_1.CreateTicketDto }),
    swagger_1.ApiResponse({ status: 201, description: 'return the added ticket', type: create_ticket_dto_1.CreatedTicketDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_dto_1.CreateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "createTicket", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiResponse({ status: 200, description: 'return all the finded ticket' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "findAll", null);
__decorate([
    common_1.Put('/:id'),
    swagger_1.ApiBody({ type: create_ticket_dto_1.CreateTicketDto }),
    swagger_1.ApiResponse({ status: 200, description: 'return the modified ticket', type: ResFormat }),
    swagger_1.ApiResponse({ status: 404, description: 'return when ticket not found', type: ResFormat }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_ticket_dto_1.CreateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "modifyTicket", null);
__decorate([
    common_1.Delete('/:id'),
    swagger_1.ApiResponse({ status: 404, description: 'return when ticket not found', type: ResFormat }),
    swagger_1.ApiResponse({ status: 200, description: 'return the deleted ticket', type: ResFormat }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "deleteTicket", null);
TicketsController = __decorate([
    common_1.Controller('tickets'),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService])
], TicketsController);
exports.TicketsController = TicketsController;
//# sourceMappingURL=tickets.controller.js.map