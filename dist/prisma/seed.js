"use strict";
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
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
function getAuthors() {
    return [
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
            name: 'John Steinbeck',
            country: 'USA',
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
            name: 'J. R. R. Tolkien',
            country: 'UK',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
            name: 'George Orwell',
            country: 'UK',
        },
    ];
}
function getBooks() {
    return [
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
            title: 'The Grapes of Wrath',
            rating: 4,
            price: 10,
            authorId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
            title: 'The Lord of the Rings',
            rating: 5,
            price: 15,
            authorId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
            title: '1984',
            rating: 5,
            price: 12,
            authorId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
            title: 'Animal Farm',
            rating: 4,
            price: 11,
            authorId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
            title: 'The Hobbit',
            rating: 4,
            price: 10,
            authorId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
        },
    ];
}
async function seed() {
    await Promise.all(getAuthors().map((author) => {
        return db.author.create({ data: author });
    }));
    await Promise.all(getBooks().map((_a) => {
        var { authorId } = _a, orderData = __rest(_a, ["authorId"]);
        return db.book.create({
            data: Object.assign(Object.assign({}, orderData), { author: {
                    connect: { id: authorId },
                } }),
        });
    }));
}
seed();
//# sourceMappingURL=seed.js.map