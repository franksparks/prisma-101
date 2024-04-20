import { findUserById } from "../src/users";

if (process.argv.length < 2) {
  console.error("Usage: bun find-user.ts <user-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findUserById(Number(identifier));
console.log(result);
