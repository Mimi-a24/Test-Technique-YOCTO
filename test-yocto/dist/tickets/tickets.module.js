"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsModule = void 0;
const ticket_schema_1 = require("./schemas/ticket.schema");
const tickets_controller_1 = require("./tickets.controller");
const tickets_service_1 = require("./tickets.service");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
let TicketsModule = class TicketsModule {
};
TicketsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: ticket_schema_1.Ticket.name, schema: ticket_schema_1.TicketSchema }])],
        controllers: [tickets_controller_1.TicketsController],
        providers: [tickets_service_1.TicketsService],
    })
], TicketsModule);
exports.TicketsModule = TicketsModule;
//# sourceMappingURL=tickets.module.js.map