export interface WeatherType {
    weather: Weather[]
    base: string
    main: Main
    wind: Wind
    sys: Sys
    name: string
    cod: number
}

export interface Weather {
    id: number
    main: string
}

export interface Main {
    temp: number
    temp_min: number
    temp_max: number
    humidity: number
}

export interface Wind {
    speed: number
}

export interface Sys {
    type: number
    id: number
    country: string
}
