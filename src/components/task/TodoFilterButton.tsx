import { Box } from 'src/components/common/box/Box'
import { Text } from 'src/components/common/text/Text'

import { Color } from 'src/components/theme/spacing'
import { Theme } from 'src/components/theme/Theme'
import { TaskFilter } from 'src/pages/TodoPage'

type Props = {
  bg: Color
  filterTask: TaskFilter
  totalTask: number
  isActive?: boolean
  onClick: () => void
}

export const TodoFilterButton: React.FC<Props> = ({
  bg,
  filterTask,
  totalTask,
  isActive,
  onClick,
}) => {
  const {
    colors: { primaryWhite, secondaryGrey, secondaryBlack },
    fontSize: { normal },
  } = Theme

  const borderColor = isActive ? secondaryBlack : secondaryGrey

  return (
    <Box
      as="button"
      bg={bg}
      opacity="0.8"
      borderRadius={1}
      cursor="pointer"
      alignItems="center"
      justifyContent="center"
      border={`2px solid ${borderColor}`}
      onClick={onClick}>
      <Text variant={normal} color={primaryWhite}>
        {filterTask}: {totalTask}
      </Text>
    </Box>
  )
}
