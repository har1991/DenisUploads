import {IsDate, IsNotEmpty, IsString } from 'class-validator';
export class TagDto{
    id: number ; 

    @IsNotEmpty()
    @IsString()
    name : string ; 
}