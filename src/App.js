import { useState } from "react";
import  {v4 as uuidv4} from "uuid"
import Todo from "./Todo";
import TodoInput from "./TodoInput";

import TodoContext ,{TodoInputContext} from './context/context';



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

function completeTodo(id) {
  let newTodos =[...todos];

  //map through the array and toggle the completion on click
  newTodos.map((todo)=>{
    if(todo.id === id && todo.isComplete){
      todo.isComplete = false;
      return todo;

    }

    if(todo.id === id && !todo.isComplete){
      todo.isComplete = true;
      return todo;
    }
    return todo
  });

  setTodos(newTodos);
}



// gets all the todo's to render
  function showAllTodo(){
    todos.map((todoList)=>{
        return(
        <TodoContext.Provider
        key={todoList.id}
        value={{todoList, removeTodo, completeTodo}}>
        <Todo />
      </TodoContext.Provider>
      )
      

    })
  }

  function showTodoInput() {
    //this refers back to the code written in another file 
    return (
      <TodoInputContext.Provider value ={{addTodo}}>

        <TodoInput />

      </TodoInputContext.Provider>
      


    );
  }


  return (
    <div className="App">
     {showTodoInput()}
     {showAllTodo()}
    </div>
  );
}

export default App;
