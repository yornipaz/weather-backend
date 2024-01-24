import { Utils } from "./util.utils";

export function kelvinToCelsius(kelvin: number): number {
    const CONSTANTS: number = 273.15;
    return kelvin - CONSTANTS;
}
export class WeatherUtils {
    static maxHumidity: number = 100;
    static maxWindSpeed: number = 10.0;
    static minHumidity: number = 30;
    static kelvinToCelsius(kelvin: number): number {
        const CONSTANTS: number = 273.15;
        return kelvin - CONSTANTS;
    }

    private static generateRandomValue(min: number, max: number): number {
        return Utils.generateRandomValue(min, max);
    }
    static generateRandomTemp(minTemp: number, maxTemp): number {
        const temp: number = this.generateRandomValue(minTemp, maxTemp);
        return Math.round(kelvinToCelsius(temp));
    }
    static generateRandomHumidity(): number {
        return Math.round(this.generateRandomValue(this.minHumidity, this.maxHumidity));
    }
    static generateRandomWindSpeed(minSpeed: number): number {
        return Number(this.generateRandomValue(minSpeed, this.maxWindSpeed).toFixed(2));
    }


}