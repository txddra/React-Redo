import React, { useState, useContext } from "react";
import {TodoInputContext} from "./context/context"
import Todo from "./Todo"

const TodoInput =()=>{

    const { addTodo } = useContext(TodoInputContext)
    const [todo, setTodo] = useState("");

    function handleCreateNewTodo(e) {
       e.preventDefault()

        addTodo(todo)
    }

    return (
        <form onSubmit={handleCreateNewTodo}>
            <input 
            type ="text"
            value={todo}
            onChange={(e) =>setTodo(e.target.value)}
            />

            <button>Submit</button>

        </form>
    )
};

export default TodoInput;