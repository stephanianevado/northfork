import { useState } from 'react'

import { Box } from 'src/components/common/box/Box'
import { Text } from 'src/components/common/text/Text'
import { Theme } from 'src/components/theme/Theme'

type Props = {
  text: string
  children: React.ReactNode | React.ReactNode[]
}

export const Tooltip = ({ text, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const {
    colors: { primaryGrey, primaryWhite },
    fontSize: { large },
    fontWeight: { bold },
  } = Theme

  const handleOnMouseEnter = () => {
    setIsHovered(!isHovered)
  }

  const handleOnMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Box
      cursor="pointer"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}>
      {isHovered && (
        <Box
          position="relative"
          bg={primaryGrey}
          borderRadius={4}
          paddingHorizontal={4}
          animation="fadeInUp">
          <Text variant={large} subStyle={bold} color={primaryWhite}>
            {text} &rarr;
          </Text>
        </Box>
      )}
      {children}
    </Box>
  )
}
