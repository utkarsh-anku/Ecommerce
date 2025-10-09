import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsArray,
  IsBoolean,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsArray()
  images: string[];

  @IsBoolean()
  isActive: boolean;

  @IsNumber()
  @Min(0)
  discount: number;

  @IsString()
  brand: string;
}
