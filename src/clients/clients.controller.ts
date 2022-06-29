import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { UpdateClientDto } from './dto/update-client.dto';
import { CreateClientDto } from './dto/client.dto';

@Controller('clients')
export class ClientsController {

  // SERVICE
  constructor(private readonly clientsService: ClientsService) { }

  // CREATE CLIENT

  @Post('/create')
  async create(@Res() res, @Body() createClientDto: CreateClientDto) {

    const createClient = await this.clientsService.create(createClientDto);
    return res.status(HttpStatus.OK).json({
      message: ' Client added succesfully',
      client: createClient
    });
  }

  // SHOW ALL CLIENTS

  @Get('/')
  async getClients(@Res() res) {
    const clients = await this.clientsService.getClients();
    return res.status(HttpStatus.OK).json({
      message: 'List of clients',
      clients: clients
    });

  }

  // SHOW CLIENT BY ID

  @Get('/:clientId')
  async getClient(@Res() res, @Param('clientId') clientId) {
    const client = await this.clientsService.getClient(clientId);
    return res.status(HttpStatus.OK).json({
      message: "Client's info",
      client: client
    });
  }

  // UPDATE CLIENT'S DATA BY ID

  @Patch('/:clientId')
  async updateClient(@Res() res, @Param('clientId') clientId, @Body() createClientDto: CreateClientDto) {
    const updatedClient = await this.clientsService.updateClient(clientId, createClientDto);
    return res.status(HttpStatus.OK).json({
      message: "Client's info updated successfully",
      updateClient: updatedClient
    });
  }


  // DELETE CLIENT BY ID

  @Delete('/:clientId')
  async deleteClient(@Res() res, @Param('clientId') clientId) {
    const deletedClient = await this.clientsService.deleteClient(clientId);
    return res.status(HttpStatus.OK).json({
      message: 'Client deleted sucessfully',
      deleteClient: deletedClient
    });

  }
}
