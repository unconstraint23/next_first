import Image from "next/image";
export async function queryData() {
     const result = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      cache: "no-store"
     })
     const postData = await result.json()
        return postData
    }

export default async function Home() {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json();



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2>
          Next.js 15 学习
        </h2>
        <p>
          {JSON.stringify(data)}
        </p>
      </main>
     
    </div>
  );
}


