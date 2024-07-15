import { AuthorsService } from './authors.service';
export declare class AuthorsController {
    private authorsService;
    constructor(authorsService: AuthorsService);
    getAll(): any;
    getById(id: string): Promise<{
        id: string;
        name: string;
        country: string;
    }>;
}
