import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
  const { register } = useForm();
  console.log(register("todo"));
  return (
    <div>
      <form>
        <input placeholder="write a to do"></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
