import { useState} from "react";

export const EditListForm = ({editTodo, todo}) => {

    const [value, setValue] = useState(todo.text);

    return (

    <form onSubmit={e =>{
        e.preventDefault();
        editTodo(value, todo.id);
        setValue("");
    }}>
        <input
            type="text"
            className="form-control mb-2"
            placeholder="Update Task"
            value={value}
            onChange={e => setValue(e.target.value)}
        />      
        {/* <button className="btn btn-outline-info w-100 mb-2" onClick={()=> addItem()}>Add</button>  */}
    </form>

    )

}
        
