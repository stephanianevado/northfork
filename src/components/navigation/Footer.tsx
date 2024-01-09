import { Box } from 'src/components/common/box/Box'
import { Spacer } from 'src/components/common/spacer/Spacer'
import { Text } from 'src/components/common/text/Text'
import { Line } from 'src/components/icons/icons'
import { Breakpoint } from 'src/components/theme/breakpoint'
import { Theme } from 'src/components/theme/Theme'
import { contactItems, ContactMedium } from 'src/utils/contactItems'

export const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const {
    colors: { primaryBlack, primaryBlue },
    fontSize: { small },
  } = Theme
  const { DESKTOP, LAPTOP, MOBILE_S } = Breakpoint

  return (
    <Box
      as="footer"
      breakpoints={{
        [MOBILE_S]: { margin: '24px 16px' },
        [LAPTOP]: { margin: '24px 80px' },
        [DESKTOP]: { margin: '24px 640px' },
      }}>
      <Line />
      <Spacer size={2} />
      <Text variant={small} color={primaryBlack}>
        Copyright © {currentYear} Stephania Nevado.
      </Text>
      <Text variant={small} color={primaryBlack}>
        All rights reserved.
      </Text>
      <Spacer size={2} />
      <Box direction="row">
        {Object.values(ContactMedium).map((id) => {
          const item = contactItems[id]
          const { text, href, icon: Icon } = item

          return (
            <Box
              key={id}
              as="a"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={text}
              wrap="nowrap"
              paddingRight={6}>
              <Icon size={5} hoverColor={primaryBlue} />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
