export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'add todo':
      return [...initialState, action.payload]
    case 'rem todo':
      return initialState.filter((todo) => todo.id !== action.payload)
    case 'toggle todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })
    default:
      return initialState
  }
}
