import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateTicketDto, CreatedTicketDto } from './dto/create-ticket.dto';
import { ApiBody, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { TicketsService } from './tickets.service';
import { Ticket } from './schemas/ticket.schema';

class ResFormat {
  @ApiProperty()
  readonly message: string;
  @ApiProperty()
  readonly id: string;
  @ApiProperty()
  readonly ticket: CreatedTicketDto;
}

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  @ApiBody({ type: CreateTicketDto })
  @ApiResponse({ status: 201, description: 'return the added ticket', type: CreatedTicketDto})
  async createTicket(@Body() createTicketDto: CreateTicketDto) {
    return await this.ticketsService.createTicket(createTicketDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'return all the finded ticket'})
  async findAll(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Put('/:id')
  @ApiBody({ type: CreateTicketDto })
  @ApiResponse({ status: 200, description: 'return the modified ticket', type: ResFormat})
  @ApiResponse({ status: 404, description: 'return when ticket not found', type: ResFormat})
  async modifyTicket(@Res() res, @Param('id') ticketId: string, @Body() newData: CreateTicketDto) {
    const modifiedTicket = await this.ticketsService.modifyTicket(ticketId, newData);
    var message = 'Ticket has been modified';
    var statusCode = HttpStatus.OK;
    if (modifiedTicket === null) {
      message = 'Ticket does not exist';
      statusCode = HttpStatus.NOT_FOUND
    }

    return res.status(statusCode).json({
      message: message,
      _id: ticketId,
      modifiedTicket,
    })
  }

  @Delete('/:id')
  @ApiResponse({ status: 404, description: 'return when ticket not found', type: ResFormat})
  @ApiResponse({ status: 200, description: 'return the deleted ticket', type: ResFormat})
  async deleteTicket(@Res() res, @Param('id') ticketId: string) {
    const deletedTicket = await this.ticketsService.deleteTicket(ticketId);
    var message = 'Ticket has been deleted';
    var statusCode = HttpStatus.OK;
    if (deletedTicket === null) {
      message = 'Ticket does not exist';
      statusCode = HttpStatus.NOT_FOUND
    }

    return res.status(statusCode).json({
      message: message,
      deletedTicket,
    })
  }
}