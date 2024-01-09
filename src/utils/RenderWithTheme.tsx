import React from 'react'

import { StyleSheetManager, ThemeProvider } from 'styled-components'

import { shouldForwardProp } from 'src/components/theme/shouldForwardProp'
import { Theme } from 'src/components/theme/Theme'

export const RenderWithTheme = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ThemeProvider theme={Theme}>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  )
}
