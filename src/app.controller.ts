import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //El constructor se encarga de traer la clase Appservice , y crearla en esta clase controller, lo que nos da la posibilidad de poder acceder a sus metodos 
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("users")
  getUsers():string[]{
    return this.appService.getUsers()
  }
}
