import { BooksService } from './books.service';
import { CreateBookDTO } from './dtos/create-book.dto';
import { UpdateBookDTO } from './dtos/update-book.dto';
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
    update(id: string, bookData: UpdateBookDTO): Promise<{
        success: boolean;
    }>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    createUserOnBook(bookId: string, userId: string): void;
}
