import React, { useRef } from 'react'
import Checkbox from './Checkbox'
import Button from './Button'

const TodoRow = ({task, index, tasks, setTasks}) => {
  return (
    <div className='todo-row'>
      <Checkbox done={task.done} tasks={tasks} setTasks={setTasks} index={index}>{task.task}</Checkbox>
      <Button setTasks={setTasks} tasks={tasks} index={index} variant={'small'}>X</Button>
    </div>
  )
}

export default TodoRow