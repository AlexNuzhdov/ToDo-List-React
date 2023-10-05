import { useState} from "react";

export const Form = ({putTodo}) => {

    const [value, setValue] = useState("");

    return (

    <form onSubmit={e =>{
        e.preventDefault();
        putTodo(value);
        setValue("");
    }}>
        <input
            type="text"
            className="form-control mb-2"
            placeholder="What needs to be done?"
            value={value}
            onChange={e => setValue(e.target.value)}
        />      
        {/* <button className="btn btn-outline-info w-100 mb-2" onClick={()=> addItem()}>Add</button>  */}
    </form>

    )

}
