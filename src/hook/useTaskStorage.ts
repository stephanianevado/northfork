import { useState } from 'react'

import { TaskItem } from 'src/components/task/Task'

const Key = 'tasks'

export function useTaskStorage() {
  const [tasks, setTasks] = useState<TaskItem[]>(
    JSON.parse(localStorage.getItem(Key) || '[]')
  )

  const storeTasks = (get: (prev: TaskItem[]) => TaskItem[]) => {
    setTasks((prev) => {
      const newValue = get(prev)
      localStorage.setItem(Key, JSON.stringify(newValue))
      return newValue
    })
  }

  return { tasks, setTasks: storeTasks }
}
