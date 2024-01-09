import { useState } from 'react'

import { Box } from 'src/components/common/box/Box'
import { Button } from 'src/components/common/button/Button'
import { IconButton } from 'src/components/common/iconButton/IconButton'
import { Hamburger, Link } from 'src/components/icons/icons'
import { Items } from 'src/components/navigation/Items'
import { Menu } from 'src/components/navigation/Menu'
import { Breakpoint } from 'src/components/theme/breakpoint'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const { DESKTOP, LAPTOP, MOBILE_S } = Breakpoint

  return (
    <>
      <Menu open={open} onClose={() => setOpen(false)} />
      <Box
        as="header"
        direction="row"
        alignItems="center"
        breakpoints={{
          [MOBILE_S]: { margin: '24px 16px', justifyContent: 'flex-end' },
          [LAPTOP]: { margin: '24px 80px', justifyContent: 'space-between' },
          [DESKTOP]: { margin: '24px 640px', justifyContent: 'space-between' },
        }}>
        <Box
          as="a"
          href="/"
          breakpoints={{
            [MOBILE_S]: { display: 'none' },
            [LAPTOP]: { display: 'flex' },
          }}>
          <img
            src="/images/logo.png"
            alt="svg logo"
            style={{
              width: 256,
              height: 46,
            }}
          />
        </Box>

        <Box>
          <Box
            breakpoints={{
              [MOBILE_S]: { display: 'none' },
              [LAPTOP]: { display: 'flex' },
            }}>
            <Box animation="fadeInDown">
              <Items />
            </Box>
          </Box>

          <Box
            breakpoints={{
              [MOBILE_S]: {
                display: 'flex',
              },
              [LAPTOP]: {
                display: 'none',
              },
            }}>
            <IconButton
              size={10}
              name="open-menu-button"
              onClick={() => setOpen(true)}
              icon={Hamburger}
              aria-label="Open navigation menu"
            />
          </Box>
        </Box>
        <Box
          animation="fadeInDown"
          breakpoints={{
            [MOBILE_S]: { display: 'none' },
            [LAPTOP]: { display: 'flex' },
          }}>
          <Button
            as="a"
            href="/documents/cv.pdf"
            target="_blank"
            icon={Link}
            iconPosition="left">
            Resume
          </Button>
        </Box>
      </Box>
    </>
  )
}
