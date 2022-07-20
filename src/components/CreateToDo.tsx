import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

function CreateToDo() {
  interface Iform {
    toDo: string;
  }

  const [todos, setTodos] = useRecoilState(toDoState);

  const categor = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<Iform>();

  const handleValid = (data: Iform) => {
    setTodos((a) => [
      { text: data.toDo, id: Date.now(), category: categor as any },
      ...a,
    ]);
    console.log(todos);
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
