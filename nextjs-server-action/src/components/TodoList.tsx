import React from "react";
import { TodoItem } from "./TodoItem";

export interface Todo {
  userId: number;
  title: string;
  completed: boolean;
  id: string;
}

async function fetchTodos() {
  try {
    const res = await fetch("http://localhost:3001/todos", {
      cache: "no-store",
    });
    const todos: Todo[] = await res.json();

    return todos;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
    }
  }
}

export const TodoList = async () => {
  const todos = await fetchTodos();
  let content;

  if (!todos || todos.length === 0) {
    content = <p>Todo 리스트가 없습니다.</p>;
  } else {
    const sortedTodos = todos.reverse();

    content = (
      <>
        {sortedTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </>
    );
  }
  return content;
};
