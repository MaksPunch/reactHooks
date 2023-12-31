import React, {useState, useEffect, useReducer} from 'react'
import TodoList from './TodoList'
import Context from './context'
import reducer from './reducer'


export default function App() {

    if (!localStorage.getItem('todos')) {
        localStorage.setItem('todos', JSON.stringify([]))
    }

    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))
    const [todoTitle, setTodoTitle] = useState('Todo Name');

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(state))
    }, [state])

    const addTodo = (event) => {
      if (event.key === 'Enter') {
        dispatch({
          type: 'add',
          payload: todoTitle
        })
        setTodoTitle('');
      }
    }

    // function deleteTodo(id) {
    //   dispatch({
    //     action: 'remove',
    //     payload: id
    //   })
    // }

    // const toggleTodo = (id) => {
    //   setTodos(todos.map((el) => {
    //     if (el.id === id) {
    //       el.completed = !el.completed
    //     }
    //     return el
    //   }))
    // }

    return (
      <Context.Provider value={{
        dispatch
      }}>
        <div className="container">
          <h1>Todo app</h1>
            <div className="input-field">
              <input type="text" onChange={(event) => setTodoTitle(event.target.value)} value={todoTitle}
              onKeyDown={addTodo}
              />
              <label>Todo Name</label>
            </div>

            <TodoList todos={state}/>
        </div>
      </Context.Provider>
    );
}