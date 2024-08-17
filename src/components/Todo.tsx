import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch} from 'react-redux';
import { removeTodoById, uptadeTodo } from '../redux/todoSlice';
import { useState } from 'react';

interface TodoProps {
  todoProps : TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  const dispatch = useDispatch()

  const [editable, setEditable] = useState<boolean>(false);

  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id))
  }

  const handleUptadeTodo = () => {
    const payload:TodoType = {
      id : id,
      content : newTodo
    }
    dispatch(uptadeTodo(payload))
    setEditable(false)
  }

  return (
    <div className='todo-main'>
      {editable ? <input type='text' style={{width:'400px', border:'none', borderBottom:'1px solid lightblue', outline:'none'}} 
      value={newTodo} 
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)} /> : <div>{content}</div> }
      <div>
        <IoIosRemoveCircleOutline
        onClick={handleRemoveTodo}
        className='todo-icons' style={{ marginRight: '5px' }} />
        {editable ? <FaCheck className='todo-icons'
        onClick={handleUptadeTodo}/> : <FaEdit 
        onClick={() => setEditable(true)}
        className='todo-icons' style={{ marginBottom: '1px' }} />}
      </div>
    </div>
  );
}

export default Todo;