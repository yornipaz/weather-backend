import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ConfigService } from '@nestjs/config';
import { WeatherResponseDto } from './dtos/weather-response.dto';
import { WeatherParamsDto } from './dtos/weather-params.dto';

@Controller('weather')
export class WeatherController {
    private secretKey: string;
    constructor(private readonly weatherService: WeatherService, private readonly configService: ConfigService) {
        this.secretKey = this.configService.get('SECRET_KEY');

    }
    @Get()
    getWeather(@Query() weatherParamsDto: WeatherParamsDto): WeatherResponseDto {

        if (weatherParamsDto.key != this.secretKey) {
            throw new HttpException('key is invalid', HttpStatus.BAD_REQUEST);
        }

        return this.weatherService.getWeather();
    }
}
