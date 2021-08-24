import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {

    const todos = useSelector((state) => state.todo.todos)

    const renderList = todos.map(todo => <TodoItem
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        todo={todo.todo}
    />)

    return (
        <div className='list'>
            <h2 className='header'>Список ТУДУ</h2>
            {renderList && renderList.length ? renderList : <p>ТУДУ пока нет!</p>}
        </div>
    )
}

export default TodoList
