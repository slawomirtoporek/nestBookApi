import { BooksService } from './books.service';
import { CreateBookDTO } from './dtos/create-book.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    getAll(): any;
    getById(id: string): Promise<{
        id: string;
        title: string;
        rating: number;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
    }>;
    create(bookData: CreateBookDTO): Promise<{
        id: string;
        title: string;
        rating: number;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
    }>;
}
