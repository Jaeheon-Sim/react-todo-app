import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, toDoState } from "./atoms";

function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const onclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos: any) => {
      return oldToDos.map((todo: { id: number }) =>
        todo.id === id ? { text, category: name as any, id } : todo
      );
    });
  };

  return (
    <li>
      <span>{text}</span>

      {category !== "DOING" && (
        <button name="DOING" onClick={onclick}>
          Doing
        </button>
      )}
      {category !== "TODO" && (
        <button name="TODO" onClick={onclick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onclick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
