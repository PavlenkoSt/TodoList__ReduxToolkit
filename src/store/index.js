import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../store/slices/todo'

export const store = configureStore({
    reducer: {
        todo: todoSlice
    },
})