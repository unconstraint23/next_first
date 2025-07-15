import { memo } from 'react'

const ParentClient = memo(({ children }: {children?: React.ReactNode}) => {
  return (
    <div>
       <h2>
        这里是客户端父组件
        </h2> 
        <div>
            {children}
        </div>
    </div>
  )
})

export default ParentClient