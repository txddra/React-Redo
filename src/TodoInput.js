import React from "react";

const TodoInput =()=>{
    return (
        <form>
            <input 
            type ="text"
            value={value}
            onChange={e =>setValue(e.target.value)}
            />

        </form>
    )
};

export default TodoInput