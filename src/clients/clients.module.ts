import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientSchema } from './schemas/client.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Clients', schema: ClientSchema }])],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
