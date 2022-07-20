import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodo, toDoState } from "./atoms";

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

  const deleteToDo = (event: React.MouseEvent) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>

      {category !== Categories.DOING && (
        <button name="DOING" onClick={onclick}>
          Doing
        </button>
      )}
      {category !== Categories.TODO && (
        <button name="TODO" onClick={onclick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name="DONE" onClick={onclick}>
          Done
        </button>
      )}
      <button name="DELETE" onClick={deleteToDo}>
        Delete
      </button>
    </li>
  );
}

export default ToDo;
