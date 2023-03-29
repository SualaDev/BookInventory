import {
  IsOptional,
  IsString,
  IsNumber,
  IsEnum,
  IsEmpty,
} from 'class-validator';
import { Category } from '../schemas/book.schema';
import { User } from 'src/auth/schemas/users.schema';

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
  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
