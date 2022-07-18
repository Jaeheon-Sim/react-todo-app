import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

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

function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To dos</h1>
      <hr></hr>
      <CreateToDo />
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.text} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
