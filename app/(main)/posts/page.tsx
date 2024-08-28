import PostsPagination from '@/components/Posts/PostsPagination'
import PostsTable from '@/components/Posts/PostsTable'
import BackButton from '@/components/Shared/BackButton/BackButton'

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go to Dashboard" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  )
}

export default PostsPage
