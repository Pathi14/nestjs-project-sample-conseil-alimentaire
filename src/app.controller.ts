import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { FoodService } from './Food/food.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private userService: UserService,
    private foodService: FoodService
  ) {}

  @Get()
  get(): string {
    return this.appService.getHello();
  }


  /*****************Requêtes vers l'utilisateur */
  @Get('/users')
  getUsers(): (ReturnType<UserService['getUsers']>) {
    return this.userService.getUsers();
  }

  @Post()
  postUser(@Body() { username, age }: { username: string, age: number }): void {
    this.userService.addUser(username, age);
  }

  @Get('/user/:username')
  getUser(@Param('username') username: string): (ReturnType<UserService['getByName']>) {
    return this.userService.getByName(username);
  }

    
  /*****************Requêtes vers les catégorie de nourriture */
  @Get('/food')
  getFoods(): (ReturnType<FoodService['getFoodRange']>) {
    return this.foodService.getFoodRange();
  }

  @Get('/user-food/:username')
  getFoodUser(@Param('username') username: string): (ReturnType<FoodService['getFoodUser']>) {
    return this.foodService.getFoodUser(username);
  }

}
