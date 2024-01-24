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
        return Math.random() * (max - min) + min;
    }
    static generateRandomTemp(minTemp: number, maxTemp): number {
        const temp: number = this.generateRandomValue(minTemp, maxTemp);
        return kelvinToCelsius(temp);
    }
    static generateRandomHumidity(): number {
        return this.generateRandomValue(this.minHumidity, this.maxHumidity);
    }
    static generateRandomWindSpeed(minSpeed: number): number {
        return this.generateRandomValue(0, this.maxWindSpeed);
    }

}