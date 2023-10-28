import { Inter } from 'next/font/google'
import { useViewer } from './useViewer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ログインしていない場合はローディングを表示
  const { viewer } = useViewer()

  if (!viewer) return <div>loading...</div>

  return (
    <div className={inter.className}>
      <h1>ブログアプリ</h1>
      {children}
    </div>
  )
}
