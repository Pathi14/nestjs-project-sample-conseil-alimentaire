import { Module } from "@nestjs/common";
import { FoodService } from "./food.service";
import { AppController } from "src/app.controller";
import { UserModule } from "src/user/user.module";

@Module({
    imports: [UserModule],
    providers: [FoodService],
    exports: [FoodService],
})
export class FoodModule {}