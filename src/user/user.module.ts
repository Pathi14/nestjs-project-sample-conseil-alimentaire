import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { AppController } from "src/app.controller";

@Module({
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}