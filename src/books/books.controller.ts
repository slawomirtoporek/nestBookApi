import {
  Controller,
  ParseUUIDPipe,
  NotFoundException,
  Get,
  Param,
} from '@nestjs/common';
import { BooksService } from './books.service';

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
}
