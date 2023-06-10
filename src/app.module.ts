import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ItemModule,MongooseModule.forRoot("mongodb+srv://prueba:prueba@cluster0.ptdypkd.mongodb.net/pruebaNest")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {


}
