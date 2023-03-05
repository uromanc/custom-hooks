import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: 'add todo',
      payload: todo
    }
    dispatchTodos(action)
  }

  const handleRemoveTodo = (id) => {
    dispatchTodos({
      type: 'rem todo',
      payload: id
    })
  }

  const handleToggleTodo = (id) => {
    dispatchTodos({
      type: 'toggle todo',
      payload: id
    })
  }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo
  }
}
