import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty()
  readonly titre: string;
  @ApiProperty()
  readonly description: string;
}

export class CreatedTicketDto {
  @ApiProperty()
  readonly titre: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly id: string;
}