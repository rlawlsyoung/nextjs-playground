import { addTodo } from "@/lib/actions";
import React from "react";

export const Form = () => {
  return (
    <form className="flex items-center gap-2" action={addTodo}>
      <input
        type="text"
        name="title"
        className="flex-grow w-full p-1 text-2xl"
        placeholder="새로운 할 일을 생성하세요."
        autoFocus
      />
      <button type="submit">Submit</button>
    </form>
  );
};
