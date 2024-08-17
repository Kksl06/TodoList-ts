import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'

function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  // useSelector, Redux'ın state'ı subscribe eder ve değişiklikleri takip eder.
  //Buradaki todo, Store içerisinde yakalanan todo.
  //?{todos} ile object distractng yapmış oldum. ve todoSlice içerisinde bulunan todoInitialState erişmiş oldum.!
  return (
    <div>
      {todos && todos.map((todo:TodoType) =>(
        <Todo key={todo.id} todoProps = {todo}/>
      ))}
    </div>
  )
}

export default TodoList