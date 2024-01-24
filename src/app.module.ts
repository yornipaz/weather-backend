import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [WeatherModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],

})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');


  }
}
