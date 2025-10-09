import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsNumber,
  IsArray,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsString()
  name: string;

  @IsNumber()
  @MinLength(1)
  price: string;

  @IsEmail()
  category: string;

  @IsNumber()
  availableStock: string;

  @IsArray()
  images: [string];
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UpdateProductDto extends PartialType(CreateUserDto) {}
