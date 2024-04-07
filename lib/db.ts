import {PrismaClient, User } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV != "production") globalThis.prisma = db;


// export async function getAllUsers(): Promise<User[]> {
//     try {
//         const users = await db.user.findMany();
//         return users;
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         throw error; // Propagate the error to the caller
//     }
// }