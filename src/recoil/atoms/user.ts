import { atom } from "recoil";

export interface User {
  id: number;
  name: string;
  age: number;
}

const initialState: User[] = [];

export const userState = atom({
  key: "user",
  default: initialState,
});
