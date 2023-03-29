import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Param,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateStudentDto } from './dto/create-student-dto';
import { UpdateStudentDto } from './dto/update-student-dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
    return this.bookService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createBook(
    @Body()
    book: CreateStudentDto,
    @Req() req,
  ): Promise<Book> {
    return this.bookService.create(book, req.user);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.FindId(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateStudentDto,
  ): Promise<Book> {
    return this.bookService.updateId(id, book);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.deleteId(id);
  }
}
