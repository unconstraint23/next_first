"use client"

import { createContext, useContext, useState } from "react"


interface ICommonProvider {
    count: number,
    increment: () => void
}

const CommonContext = createContext<ICommonProvider | undefined>({
    count: 0,
    increment: () => {}
})

export const useCommonContext = () => {
    const ctx = useContext(CommonContext)
    if(!ctx) {
        throw new Error("CommonProvider must be used")
    }
    return ctx
}

export default function CommonProvider({ children }: {children: React.ReactNode}) {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count => count + 1)
    }
  return (
    <CommonContext.Provider value={{count, increment}}>
        {children}
        
    </CommonContext.Provider>
  )
}
