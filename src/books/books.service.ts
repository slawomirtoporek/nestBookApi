import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prismaService: PrismaService) {}
}
