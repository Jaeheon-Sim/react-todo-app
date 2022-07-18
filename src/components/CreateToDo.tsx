import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";

function CreateToDo() {
  interface Iform {
    toDo: string;
  }

  const setTodos = useSetRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<Iform>();

  const handleValid = (data: Iform) => {
    console.log("add to " + data.toDo);
    setTodos((a) => [
      { text: data.toDo, id: Date.now(), category: "TODO" },
      ...a,
    ]);
    setValue("toDo", "");
  };

  return (
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
  );
}

export default CreateToDo;
