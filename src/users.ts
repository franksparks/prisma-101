import type { Prisma } from "@prisma/client";
import { db } from "./db";
export type UserOutput = Prisma.UserCreateInput;

export const newUser = async (firstName: string, lastName: string, emails: string[]) => {
  const result = await db.user.create({
    data: {
      firstName,
      lastName,
      emails: {
        create: emails.map((email) => ({ email })),
      },
      deleted: false,
    },
    include: { emails: true },
  });
  return result;
};

export const findUserById = async (userId: number): Promise<UserOutput | null> => {
  const result = await db.user.findFirst({ where: { userId } });
  return result === null ? (console.log("No user matches your criteria"), null) : result;
};

export const findAllUsers = async (): Promise<UserOutput[]> => {
  return await db.user.findMany();
};

export const findAllUsersWithEmail = async () => {
  return await db.user.findMany({
    include: {
      emails: {
        where: { deleted: false },
        select: { email: true },
      },
    },
  });
};

export const apiUsers = async (num: number) => {
  const response = await fetch(`https://randomuser.me/api?results=${num}`);
  const { results: users } = (await response.json()) as { results: any[] };
  for (const user of users) {
    const emailArray = [];
    emailArray.push(user.email);
    const result = await newUser(user.name.first, user.name.last, emailArray);
    console.log(result);
  }
};
