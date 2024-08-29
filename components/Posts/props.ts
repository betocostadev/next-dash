export interface PostsTableProps {
  limit?: number
  title?: string
}

export interface PostEditPageProps {
  params: {
    id: string
  }
}
