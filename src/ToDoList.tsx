import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

// export function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const [todoErr, setTodoErr] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//     setTodoErr("");
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (todo.length < 10) {
//       setTodoErr("Error");
//     } else {
//       setTodoErr("");
//     }
//     console.log(todo);
//   };
//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmit}>
//           <input
//             onChange={onChange}
//             value={todo}
//             placeholder="Write your Todo"
//           ></input>
//           <button>Add</button>
//           {todoErr != "" ? todoErr : null}
//         </form>
//       </div>
//     </>
//   );
// }

interface Iform {
  toDo: string;
}

interface ITodo {
  text: string;
  category: "TODO" | "DONE" | "DOING";
  id: number;
}

const toDoState = atom<ITodo[]>({ key: "toDo", default: [] });

function ToDoList() {
  const [toDos, setTodos] = useRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<Iform>();
  const handleValid = (data: Iform) => {
    console.log("add to " + data.toDo);
    setTodos((a) => [
      { text: data.toDo, id: Date.now(), category: "TODO" },
      ...a,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <h1>To dos</h1>
      <hr></hr>
      <form
        onSubmit={handleSubmit(handleValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("toDo", { required: "Wirte a to do" })}
          placeholder="write a to do"
        ></input>

        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
