import {PartialType} from '@nestjs/mapped-types';
import {IsString,IsEmail} from 'class-validator';
export class CreateUserDto{
    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsString()
    role:"Intern" | "Admin" | "SuperAdmin";
}

export class UpdateUserDto extends PartialType(CreateUserDto){}