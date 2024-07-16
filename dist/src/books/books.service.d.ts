import { Book } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class BooksService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Book[]>;
    getById(id: Book['id']): Promise<Book | null>;
    create(bookData: Omit<Book, 'id' | 'createdAt' | 'updatedAt'>): Promise<Book>;
    updateById(id: Book['id'], bookData: Omit<Book, 'id' | 'createdAt' | 'updatedAt'>): Promise<Book>;
    deleteById(id: Book['id']): Promise<Book>;
}
