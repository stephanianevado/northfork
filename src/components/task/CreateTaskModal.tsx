import { useState } from 'react'

import { Box } from 'src/components/common/box/Box'
import { Button } from 'src/components/common/button/Button'
import { Input } from 'src/components/common/input/Input'
import { Modal } from 'src/components/common/modal/Modal'
import { Spacer } from 'src/components/common/spacer/Spacer'
import { Text } from 'src/components/common/text/Text'
import { Breakpoint } from 'src/components/theme/breakpoint'
import { Theme } from 'src/components/theme/Theme'

type Props = {
  title: string
  isOpen: boolean
  onClose: () => void
  onTaskCreation: ({ name }: { name: string }) => void
}

export const CreateTaskModal: React.FC<Props> = ({
  title,
  isOpen,
  onClose,
  onTaskCreation,
}) => {
  const [taskValue, setTaskValue] = useState<string>()

  const {
    colors: { primaryPurple },
    fontSize: { medium },
    fontWeight: { bold },
  } = Theme
  const { LAPTOP } = Breakpoint

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onTaskCreation({ name: taskValue || '' })
    onClose()
  }

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <Box
        as="form"
        id="create-task-form"
        onSubmit={handleSubmit}
        paddingTop={4}>
        <Spacer size={4} />
        <Box as="label">
          <Text as="h3" color={primaryPurple} variant={medium} subStyle={bold}>
            Write down your task
          </Text>
          <Input
            type="text"
            value={taskValue || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTaskValue(e.target.value)
            }
          />
        </Box>
        <Spacer size={4} />
        <Box
          breakpoints={{
            [LAPTOP]: { alignSelf: 'flex-end' },
          }}>
          <Button type="submit">Create</Button>
        </Box>
      </Box>
    </Modal>
  )
}
