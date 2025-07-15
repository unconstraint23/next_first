import { memo } from 'react'

import Pages from '@/src/app/serverPage/page';

const page = memo(() => {
  return (
    <div>
        <h2>
            客户端使用服务端组件
        </h2>
        <Pages />
    </div>
  )
})

export default page