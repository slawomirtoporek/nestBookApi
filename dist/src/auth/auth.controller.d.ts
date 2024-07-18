import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registrationData: RegisterDTO): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
