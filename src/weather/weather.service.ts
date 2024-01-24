import { Injectable } from '@nestjs/common';
import { WeatherResponseDto } from './dtos/weather-response.dto';
import { WeatherType } from './weather.type';
import { WeatherUtils } from 'src/utils/weather.utils';
import { weather } from './weather.data';
import { Utils } from 'src/utils/util.utils';

@Injectable()
export class WeatherService {
    private _weather: WeatherType;
    constructor() {
        this._weather = weather;
    }


    private generateId(): string {
        return Math.random().toString(36).substring(2, 20);
    }


    getWeather() {
        return this.generateDataWeather();
    }

    private generateDataWeather(): WeatherResponseDto {

        const weatherData: WeatherResponseDto = {
            id: this.generateId(),
            humidity: WeatherUtils.generateRandomHumidity(),
            temperature: WeatherUtils.generateRandomTemp(this._weather.main.temp_min, this._weather.main.temp_max),
            windSpeed: WeatherUtils.generateRandomWindSpeed(this._weather.wind.speed),
            weatherName: this._weather.weather[0].main,
            city: this._weather.name,
            date: Utils.formatterDate(new Date())
        };

        return weatherData;


    }

}
