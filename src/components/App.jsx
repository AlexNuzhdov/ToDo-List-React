import React from "react";
import {useState, useEffect} from "react";
import {Form} from './Form';
import {EditListForm} from './EditListForm';
import { Todo } from "./Todo";
import { InfoList } from "./InfoList";
import { Switch } from "./Switch";
import {UseTheme} from './useTheme';


function App () {


  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);
  const [allComplete, setAllComplete] = useState(0);
  const {setTheme} = UseTheme()


  const handleLightThemeClick =() => {
    setTheme('light')
    
  }

  const handleDarkThemeClick =() => {
    setTheme('dark')
  }



  useEffect(() => {
    setAllComplete(todos.filter(todo => todo.completed === true).length)
  },[todos])


  const putTodo = (value) => {

   if (value ) {
      setTodos( [...todos, {id: Date.now(), text: value,  completed: false} ] );
      setAllTodos(allTodos + 1);
      localStorage.setItem('todos', JSON.stringify(setTodos));
   } else {
    alert("Введите текст");
   }

 };
 
 const editTodo = id => {
   setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (text, id) => {
    setTodos(todos.map(todo=> todo.id === id ? {...todo, text, isEditing: !todo.isEditing} : todo))
  }


 const toggleTodo = (id) => {

   setTodos(todos.map(todo => {
    if(todo.id !==id) return todo;
    return {
      ...todo,
      completed: !todo.completed,
    }
  }))
}




 const removeTodo = (id) =>{
   setTodos(todos.filter(todo => todo.id !== id))
   setAllTodos(allTodos - 1);
 }

 const clearTodos = () => {
  setTodos([]);
  setAllTodos(0);
 }


return (
   <>
   <div>
          <Switch
            handleLightThemeClick={handleLightThemeClick}
            handleDarkThemeClick={handleDarkThemeClick}
          />
  </div>
  <div className="container w-60 pt-5">

      
      <div className="App">

            <h1 className="title">ToDo List</h1>

                <Form putTodo={putTodo}/>
                

              {todos.map(todo => {

                return (

                todo.isEditing ?  (
                      <EditListForm editTodo={editTask} todo={todo}
                        key={todo.id}
                      />

                    )  : (

                      <Todo
                      
                        key={todo.id}
                        todo={todo}
                        editTodo={editTodo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}

                      />
                    )
                )   
              }  

              )}
                    
          <InfoList
            allTodos={allTodos}
            allComplete={allComplete}
            clearTodos={clearTodos}
          />    
          
          
          
      </div>
      
    
  </div>
  
  </>
  )
  
};

export default App;






