import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './entities/item.entity';
import { Model } from 'mongoose';

@Injectable()
export class ItemService {
  //Inyectamos el modelo para poder acceder a sus propiedades
  constructor(@InjectModel(Item.name) private readonly itemModel:Model<Item>){}


  async create(createItemDto: CreateItemDto) {
    try {
      const NewItem = await this.itemModel.create(createItemDto)

      return NewItem
      
      return 'This action adds a new item';
    } catch (error) {
      return console.log("Error en el servicio de Item, metodo Create", error.message)
    }
  }

  findAll() {
    return `This action returns all item`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
