import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bonjour, vous aurez ici, des conseils pour votre alimentation en fonction de votre âge.';
  }
}