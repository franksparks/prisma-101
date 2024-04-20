import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();

console.log("----------------------------------------------");
console.log("           Prisma Client generated            ");
console.log("----------------------------------------------");
