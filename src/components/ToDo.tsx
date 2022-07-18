import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, toDoState } from "./atoms";

function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const onclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      console.log(oldToDos);
      const targetIdx = oldToDos.findIndex((todo) => todo.id === id);
      console.log(oldToDos);
      return oldToDos;
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
