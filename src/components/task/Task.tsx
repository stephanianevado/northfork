import { useState } from 'react'

import { Box } from 'src/components/common/box/Box'
import { Checkbox } from 'src/components/common/checkbox/Checkbox'
import { IconButton } from 'src/components/common/iconButton/IconButton'
import { Text } from 'src/components/common/text/Text'
import { Close } from 'src/components/icons/icons'
import { Theme } from 'src/components/theme/Theme'
import { shortenIfLong } from 'src/utils/shortenIfLong'

export type TaskItem = {
  id: number
  name: string
  completed: boolean
}

type TaskProps = {
  task: TaskItem
  onToggle: (v: number) => void
  onRemove: (v: number) => void
  draggable: boolean
  onDragStart: () => void
  onDragEnd: () => void
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
}

export const Task: React.FC<TaskProps> = ({
  task,
  onToggle,
  onRemove,
  draggable,
  onDragStart,
  onDragEnd,
  onDragOver,
}) => {
  const [animation, setAnimation] = useState('fadeInLeft')
  const {
    colors: { secondaryBlack, primaryPurple },
    fontWeight: { bold },
  } = Theme

  const { id, name, completed } = task
  const newTaskName = shortenIfLong(name)

  const handleRemove = () => {
    setAnimation('fadeOutRight')
    setTimeout(() => {
      onRemove(id)
    }, 100)
  }

  return (
    <Box
      cursor="pointer"
      hover={{ color: 'red', opacity: '0.5' }}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}>
      <Box
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingVertical={2}
        animation={animation}>
        <Box direction="row" alignItems="center" justifyContent="center">
          <Checkbox
            type="checkbox"
            aria-label="Complete task"
            checked={completed}
            onChange={() => onToggle(id)}
          />
          <Text as="p" color={secondaryBlack}>
            <Text as="span" color={primaryPurple} subStyle={bold}>
              {id}:
            </Text>{' '}
            {newTaskName}
          </Text>
        </Box>
        <Box>
          <IconButton
            size={5}
            name="remove task"
            icon={Close}
            onClick={handleRemove}
            aria-label="Remove completed task"
          />
        </Box>
      </Box>
    </Box>
  )
}
