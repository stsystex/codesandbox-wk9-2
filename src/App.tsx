import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./tyoes/user";
import "./styles.css";

// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

const user: User = {
  name: "Test",
  hobbies: ["aaa", "bbb"],
};

export default function App() {
  // const [todos, setTodos] = useState<any>([]);
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onCkickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // console.log(res);
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px"></Text>
      <button onClick={onCkickFetchData}>データを取得</button>
      {todos.map((todo) => (
        // <p>{todo.title}</p>
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
