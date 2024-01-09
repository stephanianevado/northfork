import React from 'react'

import { StyleSheetManager, ThemeProvider } from 'styled-components'

import ReactDOM from 'react-dom/client'

import { App } from 'src/App'

import { shouldForwardProp } from 'src/components/theme/shouldForwardProp'
import { GlobalStyle, Theme } from 'src/components/theme/Theme'

import { reportWebVitals } from 'src/reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <GlobalStyle />
        <App />
      </StyleSheetManager>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
