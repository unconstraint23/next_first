"use client"


import { createContext, memo, useContext } from 'react'

const ThemeContext = createContext("")

const Theme = memo(({value, children}: {value: string, children?: React.ReactNode}) => {
    console.log(value)
  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  )
})

export default Theme

export const useTheme = () => useContext(ThemeContext)