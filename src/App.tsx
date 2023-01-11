import React from 'react'
import { ThemeProvider } from 'styled-components'
import { RouterPage } from './router/RouterPage'
import { GlobalStyles } from './styles/global-theme'
import { theme } from './styles/themes/theme'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterPage />
    </ThemeProvider>
  )
}
