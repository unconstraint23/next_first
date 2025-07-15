"use client"

import ParentClient from '@/src/components/ParentClient'
import ChildClient from '@/src/components/ChildClient'

import { memo } from 'react'

const page = memo(() => {
  return (
    <div>
        <ParentClient>
            <ChildClient />
        </ParentClient>
    </div>
  )
})

export default page