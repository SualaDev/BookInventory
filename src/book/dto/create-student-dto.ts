import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';
import { Category } from '../schemas/book.schema';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsString()
  readonly author: string;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  @IsNotEmpty()
  @IsEnum(Category, { message: 'Please put in a correct category' })
  readonly category: Category;
}
