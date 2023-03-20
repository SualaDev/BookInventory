import { IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';
import { Category } from '../schemas/book.schema';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  readonly title: string;
  @IsOptional()
  @IsString()
  readonly description: string;
  @IsOptional()
  @IsString()
  readonly author: string;
  @IsOptional()
  @IsNumber()
  readonly price: number;
  @IsOptional()
  @IsEnum(Category, { message: 'Please put in a correct category' })
  readonly category: Category;
}
