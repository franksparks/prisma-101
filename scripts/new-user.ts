import { newUser } from "../src/users";

if (process.argv.length < 4) {
  console.error("Usage: bun new-user.ts <first-name> <last-name>");
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [firstName, lastName, ...emails] = args;

const result = await newUser(firstName, lastName, emails);
console.log("User inserted:", result);
