import { Injectable } from '@nestjs/common';
import { WeatherResponseDto } from './dtos/weather-response.dto';
import { WeatherType } from './weather.type';
import { WeatherUtils } from 'src/utils/weather.utils';
import { weather } from './weather.data';

@Injectable()
export class WeatherService {
    private _weather: WeatherType;
    constructor() {
        this._weather = weather;
    }


    getWeather() {
        return this.generateDataWeather();
    }

    private generateDataWeather(): WeatherResponseDto {
        const weatherData: WeatherResponseDto = {
            humidity: WeatherUtils.generateRandomHumidity(),
            temperature: WeatherUtils.generateRandomTemp(this._weather.main.temp_min, this._weather.main.temp_max),
            windSpeed: WeatherUtils.generateRandomWindSpeed(this._weather.wind.speed),
        };
        return weatherData;


    }

}
