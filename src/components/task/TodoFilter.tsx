import { Box } from 'src/components/common/box/Box'
import { Spacer } from 'src/components/common/spacer/Spacer'
import { TodoFilterButton } from 'src/components/task/TodoFilterButton'
import { Breakpoint } from 'src/components/theme/breakpoint'
import { Theme } from 'src/components/theme/Theme'
import { TaskFilter } from 'src/pages/TodoPage'

type Props = {
  activeTasks: number
  totalTasks: number
  filter: TaskFilter
  setFilter: (v: TaskFilter) => void
}

export const TodoFilter: React.FC<Props> = ({
  activeTasks,
  totalTasks,
  filter,
  setFilter,
}) => {
  const {
    colors: { primaryGrey, primaryPurple, primaryRed },
  } = Theme
  const { LAPTOP, TABLET } = Breakpoint
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      breakpoints={{
        [TABLET]: {
          justifyContent: 'flex-start',
        },
        [LAPTOP]: {
          margin: '0px 200px',
        },
      }}>
      <TodoFilterButton
        bg={primaryPurple}
        filterTask={TaskFilter.All}
        totalTask={totalTasks}
        isActive={filter === TaskFilter.All}
        onClick={() => setFilter(TaskFilter.All)}
      />
      <Spacer size={4} />
      <TodoFilterButton
        bg={primaryRed}
        filterTask={TaskFilter.Active}
        totalTask={activeTasks}
        isActive={filter === TaskFilter.Active}
        onClick={() => setFilter(TaskFilter.Active)}
      />
      <Spacer size={4} />
      <TodoFilterButton
        bg={primaryGrey}
        filterTask={TaskFilter.Completed}
        totalTask={totalTasks - activeTasks}
        isActive={filter === TaskFilter.Completed}
        onClick={() => setFilter(TaskFilter.Completed)}
      />
    </Box>
  )
}
