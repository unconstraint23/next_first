import { memo } from 'react'

const ChildClient = memo(() => {
  return (
    <div>
        <h2>
            这里是客户端子组件
        </h2>
    </div>
  )
})

export default ChildClient