import { Form } from "@/components/Form";
import { TodoList } from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Form />
      <TodoList />
    </div>
  );
}
