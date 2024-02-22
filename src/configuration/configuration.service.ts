import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  private port: number;

  constructor(private configService: ConfigService) {
    this.loadConfiguration();
  }

  private async loadConfiguration() {
    this.port = await this.configService.get<number>('PORT');
  }

  getPort(): number {
    return this.port;
  }
}
