
import ParentClient from '@/src/components/ParentClient'
export default function page() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ParentClient>
            <div>
                这里使我自定义的内容
            </div>
        </ParentClient>
    </div>
  )
}
