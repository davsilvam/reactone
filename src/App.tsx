import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { MusicalProvider } from './contexts/MusicalContext'
import { RouterPage } from './router/RouterPage'
import { GlobalStyles } from './styles/global-theme'
import { theme } from './styles/themes/theme'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MusicalProvider>
        <RouterProvider router={RouterPage} />
      </MusicalProvider>
    </ThemeProvider>
  )
}
