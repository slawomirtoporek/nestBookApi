import { UsersService } from 'src/users/users.service';
import { RegisterDTO } from './dtos/register.dto';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    register(registrationData: RegisterDTO): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
