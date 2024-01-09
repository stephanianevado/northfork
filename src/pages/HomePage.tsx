import { Fragment } from 'react'

import Icosahedron from 'src/components/animations/Icosahedron'
import { Box } from 'src/components/common/box/Box'
import { Button, Mode } from 'src/components/common/button/Button'
import { Spacer } from 'src/components/common/spacer/Spacer'
import { Text } from 'src/components/common/text/Text'
import { Dash } from 'src/components/icons/icons'
import { Breakpoint } from 'src/components/theme/breakpoint'
import { Theme } from 'src/components/theme/Theme'
import { contactItems, ContactMedium } from 'src/utils/contactItems'

export const HomePage: React.FC = () => {
  const {
    fontSize: { huge, medium, xxl },
    fontWeight: { bold },
    colors: { secondaryBlack, secondaryGrey, primaryWhite },
  } = Theme
  const { LAPTOP, MOBILE_S, MOBILE_L } = Breakpoint

  return (
    <>
      <Box
        breakpoints={{
          [MOBILE_S]: { direction: 'column' },
          [LAPTOP]: { direction: 'row', alignItems: 'center' },
        }}>
        <Box
          breakpoints={{
            [LAPTOP]: { flex: 1 },
          }}>
          <Box direction="row" alignItems="center">
            <Dash />
            <Spacer size={1} />
            <Text
              as="span"
              color={secondaryGrey}
              variant={medium}
              subStyle={bold}>
              Stephania Nevado
            </Text>
          </Box>
          <Spacer size={10} />
          <Text
            as="h1"
            subStyle={bold}
            color={secondaryBlack}
            breakpoints={{
              [MOBILE_S]: { variant: xxl },
              [MOBILE_L]: { variant: huge },
            }}>
            Northfork Frontend Todo App✨
          </Text>
          <Spacer size={10} />
          <Box
            breakpoints={{
              [MOBILE_S]: { direction: 'column', alignItems: 'center' },
              [LAPTOP]: { direction: 'row' },
            }}>
            {Object.values(ContactMedium)
              .filter((id) => {
                return [
                  ContactMedium.GitHub,
                  ContactMedium.Linkedin,
                  ContactMedium.Email,
                ].includes(id)
              })
              .map((id) => {
                const item = contactItems[id]
                const { alternativeText, href, icon: Icon } = item
                return (
                  <Fragment key={id}>
                    <Button
                      as="a"
                      href={href}
                      target="_blank"
                      icon={Icon}
                      iconPosition="left"
                      color={primaryWhite}
                      bg={secondaryBlack}
                      mode={Mode.Alternative}>
                      {alternativeText}
                    </Button>
                    <Spacer size={4} />
                  </Fragment>
                )
              })}
          </Box>
        </Box>
        <Icosahedron />
      </Box>
    </>
  )
}
