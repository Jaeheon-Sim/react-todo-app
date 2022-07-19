import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  category: "TODO" | "DONE" | "DOING";
  id: number;
}

export const toDoState = atom<ITodo[]>({ key: "toDo", default: [] });

export const toDoSelector = selector({
  key: "toDoselector",
  get: ({ get }) => {
    const toDos = get(toDoState);

    return [
      toDos.filter((toDo) => toDo.category === "TODO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
