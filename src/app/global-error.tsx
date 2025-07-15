// 只有在生产环境下，全局错误才生效
/**
 * 未捕获的异常
未捕获的异常是意外错误，表示在应用正常流程中不应发生的错误或问题。这些应该通过抛出错误来处理，然后由错误边界捕获。

常用：使用 error.tsx 处理路由下方的未捕获错误。

不常用：使用 global-error.tsx 处理全局中未捕获的错误。

:::info 注意：error.tsx 必须是客户端组件，需要添加"use client"
error相关参数:
export default function Error({error, reset}: {error: Error & { digest?: string }; reset: () => void})
 */
"use client"
export default function GlobalError() {
  return (
    <html>
      <body>
        <h2>global error !!!</h2>
      </body>
    </html>
  )
}