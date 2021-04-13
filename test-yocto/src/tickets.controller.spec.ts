import { TicketsController } from './tickets/tickets.controller';
import { TicketsService } from './tickets/tickets.service';
import { TicketsModule } from './tickets/tickets.module';
import { Ticket } from './tickets/schemas/ticket.schema';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

describe('TicketsController', () => {
  let ticketsController: TicketsController;
  let ticketsService : TicketsService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule( 
      { imports: [MongooseModule.forRoot('mongodb://localhost:27017/'), TicketsModule],
  }).compile();

    ticketsController = app.get<TicketsController>(TicketsController);
    ticketsService = app.get<TicketsService>(TicketsService);
  });

  describe('createTicket', () => {
    it('should return a Ticket',  async () =>{
      var t = new Ticket() 
      t.titre = 'Hello'
      t.description = 'oui'
      const res = await ticketsController.createTicket(t);

      expect( res.titre ).toBe('Hello');
      expect( res.description ).toBe('oui');
    });
  });
});
