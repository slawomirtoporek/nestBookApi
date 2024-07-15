import { Controller, Get } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get('/')
  getAll(): any {
    return this.authorsService.getAll();
  }
}
