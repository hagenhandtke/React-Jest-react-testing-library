import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";

const usersJson = JSON.parse(
  readFileSync(path.join(__dirname, "/userHoppiesData.json")).toString()
);

const hoppies = [{ name: "Playing football" }, { name: "Playing Ice hockey" }];

export const _hoppies = hoppies;
export const _users = usersJson.users;

const mock = {
  users: jest.fn(() => {
    return {
      then: callback =>
        act(() => {
          callback({
            usersJson
          });
        })
    };
  }),
  hoppies: jest.fn(() => {
    return {
      then: callback =>
        act(() => {
          callback(hoppies);
        })
    };
  })
};

export default mock;
