import { atom } from "recoil";

export interface ITodo {
  text: string;
  category: "TODO" | "DONE" | "DOING";
  id: number;
}

export const toDoState = atom<ITodo[]>({ key: "toDo", default: [] });
