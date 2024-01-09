import { useState } from 'react'

import { Box } from 'src/components/common/box/Box'
import { Button } from 'src/components/common/button/Button'
import { Plus } from 'src/components/icons/icons'
import { CreateTaskModal } from 'src/components/task/CreateTaskModal'
import { TaskItem } from 'src/components/task/Task'

import { Breakpoint } from 'src/components/theme/breakpoint'
import { Title } from 'src/components/Title'
import { TaskFilter } from 'src/pages/TodoPage'

type Props = {
  activeTasks: number
  handleCreateTask: (v: Pick<TaskItem, 'name'>) => void
}

export const TodoHeader: React.FC<Props> = ({
  activeTasks,
  handleCreateTask,
}) => {
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false)
  const { LAPTOP } = Breakpoint

  return (
    <>
      {showCreateTaskModal && (
        <CreateTaskModal
          title="Create a new task"
          isOpen={showCreateTaskModal}
          onTaskCreation={handleCreateTask}
          onClose={() => setShowCreateTaskModal(false)}
        />
      )}
      <Box
        breakpoints={{
          [LAPTOP]: {
            direction: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        }}>
        <Box direction="column">
          <Title
            header="Your Todo's"
            subHeader={`${TaskFilter.Active}: ${activeTasks}`}
          />
        </Box>
        <Box>
          <Button
            icon={Plus}
            iconPosition="right"
            onClick={() => setShowCreateTaskModal(true)}>
            Create new
          </Button>
        </Box>
      </Box>
    </>
  )
}
