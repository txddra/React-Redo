import React, { useState } from "react";

const TodoInput =()=>{

    const [value, setValue] = useState("");
    
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