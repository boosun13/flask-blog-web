import RootLayout from '@/src/app/layout'
import { NextPage } from 'next'

const PostListPage: NextPage = async () => {
  const response = await fetch('http://localhost:3000/index', {})

  if (!response.ok) return

  return (
    <RootLayout>
      <h2>ブログの一覧</h2>
    </RootLayout>
  )
}

export default PostListPage
