import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Book[]> {
    return this.prismaService.book.findMany({
      include: { author: true },
    });
  }

  public getById(id: Book['id']): Promise<Book | null> {
    return this.prismaService.book.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  public async create(
    bookData: Omit<Book, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Book> {
    try {
      const { authorId, ...otherData } = bookData;
      return await this.prismaService.book.create({
        data: {
          ...otherData,
          author: {
            connect: { id: authorId },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new BadRequestException('Author does not exist');
      if (error.code === 'P2002')
        throw new ConflictException('TItle is already taken');
      throw error;
    }
  }
}
