import { AuthorsService } from './authors.service';
import { CreateAuthorDTO } from './dtos/create-authors.dto';
export declare class AuthorsController {
    private authorsService;
    constructor(authorsService: AuthorsService);
    getAll(): any;
    getById(id: string): Promise<{
        id: string;
        name: string;
        country: string;
    }>;
    create(authorData: CreateAuthorDTO): Promise<{
        id: string;
        name: string;
        country: string;
    }>;
}
