import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/client.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Clients } from './interfaces/client.interface';


@Injectable()
export class ClientsService {
  constructor(@InjectModel('Clients') private clientModel: Model<Clients>) { }

  // CREATE A CLIENT

  async create(createClientDto: CreateClientDto): Promise<Clients> {
    const createClient = new this.clientModel(createClientDto)
    return await createClient.save();
  }

  // SHOW ALL CLIENTS

  async getClients(): Promise<Clients[]> {
    const allClients = this.clientModel.find();
    return allClients;
  }

  //SHOW ONE CLIENT

  async getClient(clientId: number): Promise<Clients> {
    const client = this.clientModel.findById(clientId);
    return client;
  }
  //UPDATE CLIENT'S DATA

  async updateClient(clientId: string, createClientDto: CreateClientDto) {
    const updateClient = this.clientModel.findByIdAndUpdate(clientId, createClientDto, { new: true })
    return updateClient;
  }

  // DELETE CLIENT

  async deleteClient(clientId: string): Promise<Clients> {
    const deleteClient = this.clientModel.findByIdAndDelete(clientId);
    return deleteClient;
  }
}
