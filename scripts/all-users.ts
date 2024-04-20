import { findAllUsers } from "../src/users";

const users = await findAllUsers();
for (const { firstName, lastName, emails } of users) {
  console.log(firstName, lastName, emails);
}
