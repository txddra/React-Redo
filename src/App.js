import { useState } from "react";
import  {v4 as uuidv4} from "uuid"
import Todo from "./Todo";
import TodoInput from "./TodoInput";

import "./App.css";

function App() {


  let initialTodoArray=[
    {
      id: uuidv4(),
      todo: "test your patience"
    },
    
    {
      id: uuidv4(),
      todo: "test your skill"
    },
    {
      id: uuidv4(),
      todo: "test your luck"
    }

  ];

  const [todos, setTodos] = useState(initialTodoArray);

//gets all the todo's to render
  function showAllTodo(){
    return todos.map((todoList)=>{
      return <Todo todo={todoList.id} todoList={todoList} />
    })
  }

  function showTodoInput() {
    return <TodoInput />
  }
  return (
    <div className="App">
     {showTodoInput()}
     {showAllTodo()}
    </div>
  );
}

export default App;
