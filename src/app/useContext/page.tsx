"use client"
import { useCommonContext } from '@/src/components/CommonProvider'
import Theme from '@/src/components/Theme'
import React from 'react'

export default function page() {
    const {count, increment} = useCommonContext()
  return (
    <div>
        <h2>
            对于全局上下文的使用
        </h2>
        <Theme value='dark'>
            <h3>
                测试页
            </h3>
            <p>
                点击次数: {count}
            </p>
            <button onClick={increment}>
                点击
            </button>   
        </Theme>
    </div>
  )
}
