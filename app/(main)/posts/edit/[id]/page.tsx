'use client'

import PostForm from '@/components/Posts/PostForm'
import { PostEditPageProps } from '@/components/Posts/props'
import BackButton from '@/components/Shared/BackButton/BackButton'
import posts from '@/data/postsData'
import { Post } from '@/types/posts'
import { useEffect, useState } from 'react'

const PostEditPage = ({ params }: PostEditPageProps) => {
  const [post, setPost] = useState<Post | undefined>(undefined)
  // Render will be executed before the Hook due to Next.js, use this to fix the problem
  const [postFetched, setPostFetched] = useState(false)

  useEffect(() => {
    if (params.id) {
      const post = posts.find((pt) => pt.id === params.id)
      setPost(post)
    }

    setPostFetched(true)
  }, [])

  return (
    <div>
      <BackButton text="Back to Posts" link="/posts" />
      {postFetched && <PostForm post={post} />}
    </div>
  )
}

export default PostEditPage
