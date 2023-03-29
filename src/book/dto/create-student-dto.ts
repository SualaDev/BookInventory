import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsEmpty,
} from 'class-validator';
import { Category } from '../schemas/book.schema';
import { User } from 'src/auth/schemas/users.schema';

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
  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
