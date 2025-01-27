import React from 'react'
import { useTheme } from './ThemeProvider'
export default function Theme() {
  return (
    <div>
     
  
    <ThemeProvider>
      <App />
    </ThemeProvider>
  
    </div>
  )
}
