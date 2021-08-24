import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCompletedStatus, removeTodo } from '../store/slices/todo'

const TodoItem = ({ id, todo, completed }) => {
    const dispatch = useDispatch()
    
    const changeHandler = () => {
        dispatch(changeCompletedStatus(id))
    } 

    const deleteHandler = () => {
        dispatch(removeTodo(id))
    }
    
    return (
        <div className='item'>
            <div>{todo}</div>
            <input 
                type='checkbox' 
                value={todo} 
                onChange={changeHandler}
                checked={completed}
            />
            <button 
                onClick={deleteHandler}
            >Удалить</button>
        </div>
    )
}

export default TodoItem
