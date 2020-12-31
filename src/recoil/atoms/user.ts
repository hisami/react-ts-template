import { atom } from "recoil";

import { User } from "@Types/user";

const initialState: User[] = [];

export const userState = atom({
  key: "user",
  default: initialState,
});
