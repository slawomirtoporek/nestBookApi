"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
let BooksService = class BooksService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.book.findMany({
            include: { author: true },
        });
    }
    getById(id) {
        return this.prismaService.book.findUnique({
            where: { id },
            include: { author: true },
        });
    }
    async create(bookData) {
        try {
            const { authorId } = bookData, otherData = __rest(bookData, ["authorId"]);
            return await this.prismaService.book.create({
                data: Object.assign(Object.assign({}, otherData), { author: {
                        connect: { id: authorId },
                    } }),
            });
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.BadRequestException('Author does not exist');
            if (error.code === 'P2002')
                throw new common_1.ConflictException('TItle is already taken');
            throw error;
        }
    }
    async updateById(id, bookData) {
        try {
            const { authorId } = bookData, otherData = __rest(bookData, ["authorId"]);
            return await this.prismaService.book.update({
                where: { id },
                data: Object.assign(Object.assign({}, otherData), { author: {
                        connect: { id: authorId },
                    } }),
            });
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.BadRequestException("Author doesn't exist");
            if (error.code === 'P2002')
                throw new common_1.ConflictException('Title is already taken');
            throw error;
        }
    }
    deleteById(id) {
        return this.prismaService.book.delete({
            where: { id },
        });
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BooksService);
//# sourceMappingURL=books.service.js.map