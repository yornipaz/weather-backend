import { IsNotEmpty, IsString } from "class-validator";

export class WeatherParamsDto {

    @IsString()
    @IsNotEmpty()
    key: string;

}