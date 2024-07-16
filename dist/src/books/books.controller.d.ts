import { BooksService } from './books.service';
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
}
