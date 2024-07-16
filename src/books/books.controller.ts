import {
  Controller,
  ParseUUIDPipe,
  NotFoundException,
  Get,
  Param,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dtos/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get('/')
  getAll(): any {
    return this.booksService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const book = await this.booksService.getById(id);

    if (!book) throw new NotFoundException('404 Not Found');

    return book;
  }

  @Post('/')
  create(@Body() bookData: CreateBookDTO) {
    return this.booksService.create(bookData);
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.booksService.getById(id)))
      throw new NotFoundException('Book not found');
    await this.booksService.deleteById(id);
    return { success: true };
  }
}
