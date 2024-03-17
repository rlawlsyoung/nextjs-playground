import Link from "next/link";
import React from "react";
import { Todo } from "./TodoList";
import { deleteTodo } from "@/lib/actions";
import { Checkbox } from "./Checkbox";

export const TodoItem = (todo: Todo) => {
  return (
    <form className="my-4 flex justify-between">
      <label htmlFor="completed" className="text-2xl hover:underline">
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div className="flex items-center gap-4">
        <Checkbox todo={todo} />
        <button
          formAction={async () => {
            "use server";

            await deleteTodo(todo);
          }}
        >
          X
        </button>
      </div>
    </form>
  );
};
