'use client'

import { memo, useEffect, useState } from 'react'

type Todo = {
  userId: number
  id: number
  title: string
  completed: string
}
const test01 = memo(() => {
     const [data, setData] = useState<Todo|null>(null);
    useEffect(() => {
      queryData()
    }, [])
    const queryData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => setData(data));
    }
  return (
    <div>
        <p className="text-2xl">
          {data?.title}
        </p>
    </div>
  )
})

// export async function getServerSideProps(context: any) {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await res.json();

//   return { props: { data } };
// }

export default test01