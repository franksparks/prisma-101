import { apiUsers } from "../src/users";

const [_bun, _script, num] = process.argv;

const result = await apiUsers(Number(num));
if (result !== undefined) {
  console.log("Users inserted:", num);
} else {
  console.log("Something went wrong");
}
