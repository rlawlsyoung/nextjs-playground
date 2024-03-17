"use client";

import React, { useOptimistic, useTransition } from "react";
import { Todo } from "./TodoList";
import { updateTodo } from "@/lib/actions";

export const Checkbox = ({ todo }: { todo: Todo }) => {
  const [isPending, startTransition] = useTransition();
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    todo,
    (state: Todo, completed: boolean) => ({
      ...state,
      completed,
    })
  );

  // useOptimistic *
  // startTransition *
  // revalidatePath 인자 *

  return (
    <input
      type="checkbox"
      checked={optimisticTodo.completed}
      id="completed"
      name="completed"
      //   disabled={isPending}
      onChange={
        async () => {
          addOptimisticTodo(!todo.completed);
          await updateTodo(todo);
        }
        // Optimistic 없는 버전 () => startTransition(() => updateTodo(todo))
      }
      className="min-w-[2rem] min-h-[2rem]"
    />
  );
};
