import { TaskFilter } from 'src/pages/TodoPage'

export function getNoTasksText(filter: TaskFilter) {
  switch (filter) {
    case TaskFilter.Active:
      return "You don't have any active tasks"
    case TaskFilter.Completed:
      return "You don't have any completed tasks"
    default:
      return "You don't have any tasks"
  }
}
