import { PrismaService } from 'src/shared/services/prisma.service';
import { Author } from '@prisma/client';
export declare class AuthorsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Author[]>;
}
