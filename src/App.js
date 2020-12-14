import { useState } from "react";
import  {v4 as uuidv4} from "uuid"
import Todo from "./Todo";
import TodoInput from "./TodoInput";

import "./App.css";



function App() {

  let initialTodoArray=[
    {
      id: uuidv4(),
      todo: "test your patience",
      isComplete: false,
    },
    
    {
      id: uuidv4(),
      todo: "test your skill",
      isComplete :false,
    },
    {
      id: uuidv4(),
      todo: "test your luck",
      isComplete: false
    },

  ];

  const [todos, setTodos] = useState(initialTodoArray);

//function that adds to the todo list
function addTodo(todo){
  const newTodos =[
    ...todos,
    {
      todo: todo,
      isComplete: false,
      id: uuidv4(),
    },
  ];
  //call the function 
  setTodos(newTodos);
}

function removeTodo(id){
  let newTodos =[...todos];

  newTodos =newTodos.filter(todo => todo.id !== id);

  setTodos(newTodos)


}



// gets all the todo's to render
  function showAllTodo(){
    return todos.map((todoList)=>{
      return <Todo 
      todo={todoList.id} 
      todoList={todoList} 
      removeTodo={removeTodo}/>
    })
  }

  function showTodoInput() {
    //this refers back to the code written in another file 
    return <TodoInput addTodo = {addTodo}/>
  }


  return (
    <div className="App">
     {showTodoInput()}
     {showAllTodo()}
    </div>
  );
}

export default App;
