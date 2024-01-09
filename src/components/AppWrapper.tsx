import { Box } from 'src/components/common/box/Box'
import { Footer } from 'src/components/navigation/Footer'
import { Header } from 'src/components/navigation/Header'
import { Breakpoint } from 'src/components/theme/breakpoint'

type Props = {
  children: React.ReactNode
}

export const AppWrapper = ({ children }: Props) => {
  const { DESKTOP, LAPTOP, MOBILE_S } = Breakpoint

  return (
    <Box width="100vw" height="100vh">
      <Header />
      <Box
        as="main"
        id="main"
        grow={1}
        breakpoints={{
          [MOBILE_S]: { margin: '16px 16px' },
          [LAPTOP]: { margin: '16px 80px' },
          [DESKTOP]: { margin: '100px 640px' },
        }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
