import { render, screen } from '@testing-library/react'

import { TaskItem } from 'src/components/task/Task'
import { TodoList } from 'src/components/task/TodoList'
import { TaskFilter } from 'src/pages/TodoPage'
import { RenderWithTheme } from 'src/utils/RenderWithTheme'

test('shows all tasks', () => {
  const tasks: TaskItem[] = [
    { id: 1, name: 'make the laundry', completed: false },
    { id: 2, name: 'go to the gym', completed: true },
    { id: 3, name: 'create todo app for northfork', completed: false },
  ]

  render(
    <RenderWithTheme>
      <TodoList
        filter={TaskFilter.All}
        filteredTasks={tasks}
        setTasks={jest.fn()}
      />
    </RenderWithTheme>
  )

  const task1 = screen.getByText(/make the laundry/i)
  expect(task1).toBeInTheDocument()
  const task2 = screen.getByText(/go to the gym/i)
  expect(task2).toBeInTheDocument()
  const task3 = screen.getByText(/create todo app for northfork/i)
  expect(task3).toBeInTheDocument()
})

test('shows correct text when no tasks', () => {
  const tasks: TaskItem[] = []

  render(
    <RenderWithTheme>
      <TodoList
        filter={TaskFilter.Completed}
        filteredTasks={tasks}
        setTasks={jest.fn()}
      />
    </RenderWithTheme>
  )

  const text = screen.getByText(/You don't have any completed tasks/i)
  expect(text).toBeInTheDocument()
})
