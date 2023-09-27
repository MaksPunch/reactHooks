import React, {useContext} from 'react'
import Context from './context'

export default function TodoItem({todo}) {
  const {dispatch} = useContext(Context)

  const cls = ['todo']

  if (todo.completed) {
    cls.push('completed');
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch({
            type: 'toggle',
            payload: todo.id
          })}
        />
        <span>{todo.title}</span>
        <div className='todoActions'>
          <button onClick={() => dispatch({
            type: 'edit',
            payload: {
              id: todo.id,
              title: prompt('Укажите новое название задачи.')
            }
          })}>
            <i
                className="material-icons black-text"
            >
              edit
            </i>
          </button>
          <button onClick={() => dispatch({
            type: 'remove',
            payload: todo.id
          })}>
            <i
                className="material-icons red-text"
            >
              delete
            </i>
          </button>
        </div>
      </label>
    </li>
  )
}