import React, { useState } from "react";

const TodoInput =({addTodo})=>{

    const [value, setValue] = useState("");

    function handleCreateNewTodo(e) {
        e.preventDefault();

        addTodo(value)
    }

    return (
        <form>
            <input 
            onSubmit={handleCreateNewTodo}
            type ="text"
            value={value}
            onChange={e =>setValue(e.target.value)}
            />

            <button>Submit</button>

        </form>
    )
};

export default TodoInput;