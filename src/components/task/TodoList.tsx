import { useState } from 'react'

import { Box } from 'src/components/common/box/Box'

import { Text } from 'src/components/common/text/Text'
import { Task, TaskItem } from 'src/components/task/Task'
import { Breakpoint } from 'src/components/theme/breakpoint'
import { Theme } from 'src/components/theme/Theme'
import { TaskFilter } from 'src/pages/TodoPage'
import { getNoTasksText } from 'src/utils/getNoTasksText'

type Props = {
  filter: TaskFilter
  filteredTasks: TaskItem[]
  setTasks: (get: (prev: TaskItem[]) => TaskItem[]) => void
}

export const TodoList: React.FC<Props> = ({
  filter,
  filteredTasks,
  setTasks,
}) => {
  const [draggedTask, setDraggedTask] = useState<TaskItem | null>(null)

  const {
    colors: { secondaryBlack, secondaryGrey, primaryWhite },
    fontWeight: { bold },
  } = Theme
  const { LAPTOP } = Breakpoint

  const handleToggle = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleRemove = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const handleDragStart = (task: TaskItem) => {
    setDraggedTask(task)
  }

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    id: number
  ) => {
    event.preventDefault()
    if (draggedTask) {
      setTasks((prev) => {
        const updatedTasks = [...prev]
        const draggedIndex = prev.findIndex(
          (task) => task.id === draggedTask.id
        )
        const dropIndex = prev.findIndex((task) => task.id === id)
        updatedTasks.splice(draggedIndex, 1)
        updatedTasks.splice(dropIndex, 0, draggedTask)
        return updatedTasks
      })
    }
  }

  const handleDragEnd = () => {
    setDraggedTask(null)
  }

  return (
    <>
      <Box
        borderRadius={2}
        border={`2px solid ${secondaryGrey}`}
        bg={primaryWhite}
        paddingVertical={2}
        paddingHorizontal={4}
        breakpoints={{
          [LAPTOP]: {
            margin: '0px 200px',
          },
        }}>
        {filteredTasks.length === 0 && (
          <Text as="p" color={secondaryBlack} subStyle={bold} align="center">
            {getNoTasksText(filter)}
          </Text>
        )}

        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onRemove={handleRemove}
            draggable
            onDragStart={() => handleDragStart(task)}
            onDragEnd={handleDragEnd}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) =>
              handleDragOver(e, task.id)
            }
          />
        ))}
      </Box>
    </>
  )
}
