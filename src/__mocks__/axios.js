import { readFileSync } from "fs";
import path from "path";

const usersJson = JSON.parse(
  readFileSync(path.join(__dirname, "/userHoppiesData.json")).toString()
);

const mock = {
  get: jest.fn(() => Promise.resolve({ data: usersJson }))
};

export default mock;
