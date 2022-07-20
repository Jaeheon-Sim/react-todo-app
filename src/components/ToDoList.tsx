import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";
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
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To dos</h1>
      <hr></hr>

      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
