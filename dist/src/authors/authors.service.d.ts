import { PrismaService } from 'src/prisma/prisma.service';
import { Author } from '@prisma/client';
export declare class AuthorsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Author[]>;
    getById(id: Author['id']): Promise<Author | null>;
    create(authorData: Omit<Author, 'id'>): Promise<Author>;
    updateById(id: Author['id'], authorData: Omit<Author, 'id'>): Promise<Author>;
    deleteById(id: Author['id']): Promise<Author>;
}
