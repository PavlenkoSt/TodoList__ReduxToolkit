import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        { id: 0, todo: 'Купить хлеб', completed: true },
        { id: 1, todo: 'Купить молоко', completed: false },
        { id: 2, todo: 'Купить машину', completed: false },
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        changeCompletedStatus: (state, action) => {
            state.todos.map(todo => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed
                }
                return todo
            })
            
        }
    }
})


export default todoSlice.reducer

export const { addTodo, removeTodo, changeCompletedStatus } = todoSlice.actions