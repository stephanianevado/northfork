import { useState } from 'react'

import { Spacer } from 'src/components/common/spacer/Spacer'
import { TodoFilter } from 'src/components/task/TodoFilter'
import { TodoHeader } from 'src/components/task/TodoHeader'
import { TodoList } from 'src/components/task/TodoList'
import { useTaskStorage } from 'src/hook/useTaskStorage'

export enum TaskFilter {
  All = 'All',
  Completed = 'Completed',
  Active = 'Active',
}

export const TodoPage: React.FC = () => {
  const [filter, setFilter] = useState<TaskFilter>(TaskFilter.All)
  const { tasks, setTasks } = useTaskStorage()

  const id = tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1

  const handleCreateTask = ({ name }: { name: string }) => {
    setTasks((prev) => [...prev, { id: id, name, completed: false }])
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === TaskFilter.All) {
      return true
    } else if (filter === TaskFilter.Completed) {
      return task.completed
    } else {
      return !task.completed
    }
  })

  const activeTasks = tasks.filter((task) => !task.completed).length
  const totalTasks = tasks.length

  return (
    <>
      <TodoHeader
        activeTasks={activeTasks}
        handleCreateTask={handleCreateTask}
      />
      <Spacer size={6} />
      <TodoFilter
        activeTasks={activeTasks}
        totalTasks={totalTasks}
        filter={filter}
        setFilter={setFilter}
      />
      <Spacer size={6} />
      <TodoList
        filter={filter}
        filteredTasks={filteredTasks}
        setTasks={setTasks}
      />
    </>
  )
}
