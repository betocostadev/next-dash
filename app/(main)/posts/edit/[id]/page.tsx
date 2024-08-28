'use client'

import PostForm from '@/components/Posts/PostForm'
import BackButton from '@/components/Shared/BackButton/BackButton'
import posts from '@/data/postsData'
import { Post } from '@/types/posts'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const PostEditPage = () => {
  console.log('POST EDIT PAGE')
  const [post, setPost] = useState<Post | undefined>(undefined)
  // Render will be executed before the Hook due to Next.js, use this to fix the problem
  const [postFetched, setPostFetched] = useState(false)

  const pathName = usePathname()

  useEffect(() => {
    if (pathName.includes('edit')) {
      const id = pathName.split('posts/edit/')[1]
      if (id) {
        const post = posts.find((pt) => pt.id === id)
        setPost(post)
      }
    }
    setPostFetched(true)
  }, [pathName])

  return (
    <div>
      <BackButton text="Back to Posts" link="/posts" />
      {postFetched && <PostForm post={post} />}
    </div>
  )
}

export default PostEditPage
