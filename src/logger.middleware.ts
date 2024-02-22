import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";


@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    private requestCount: number = 0;

    use(req: Request, res: Response, next: NextFunction) {
        this.requestCount++;

        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log(`[${new Date().toISOString()}] Request ${this.requestCount}: ${req.method} from ${ip}`);

        next();
    }

}