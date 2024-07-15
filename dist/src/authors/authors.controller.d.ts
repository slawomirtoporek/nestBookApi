import { AuthorsService } from './authors.service';
import { CreateAuthorDTO } from './dtos/create-author.dto';
import { UpdateAuthorDTO } from './dtos/update-author.dto';
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
    update(id: string, authorData: UpdateAuthorDTO): Promise<{
        success: boolean;
    }>;
}
