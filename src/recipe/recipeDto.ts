import {IsDate, IsNotEmpty,  IsNumber,  IsString } from 'class-validator';
import { RecipeEnumDifficulty } from 'src/enums/difficulty-enum';

export class RecipeDto{
    
    id: number ; 

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    time_preparation: number;

    @IsNotEmpty()
    @IsNumber()
    time_cocking: number;

    difficulty: RecipeEnumDifficulty;

    private: boolean;

    waiting_for_validation: boolean;

    published : boolean ;

    
}