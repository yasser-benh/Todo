import { useRef, useState } from 'react'
import logo from './img/to-do-list.png'
import './App.css'
import add from './img/ajouter.png'
import BtnCompoenet from './buttonComp';

function App() {
  const [todo , setTodo]= useState ([]);
  const inputRef = useRef();
  const addTodo = ()=> {
    const text = inputRef.current.value;
    setTodo([...todo , text])
    inputRef.current.value =  ''
    
  }

  return (
    <>
    <header>
      <img src = {logo}/>
      <h1>Todo</h1>
      </header>
    <section className='main'>
      <div className='todo-count'>
        <div className='titles'> 
          <h3>Task Done</h3>
          <h4>keep it up</h4>
        </div>
        <div className='count'>
          <p>0/0</p>
        </div>
      </div>
      
      </section>
      <div className='add-todo'>
      <input ref={inputRef} placeholder='Write your next task ...'/>
      <button className='add'onClick={addTodo}><img src={add}/></button>
      </div>
      <div className='todo-list'>
      <ul>
        
        {todo.map ((todos) => {
          return <li>
          <BtnCompoenet/>
          <p>{todos}</p>
          </li>
        })}

      </ul>
      </div>
      
    </>
  )
  
}

export default App
