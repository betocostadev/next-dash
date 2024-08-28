import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Post } from '@/types/posts'

const PostForm = ({ post }: { post?: Post }) => {
  const formSchema = z.object({
    title: z
      .string()
      .min(10, { message: 'Title must be at least 10 characters.' })
      .max(100, { message: 'Title must be less than 101 characters' }),
    author: z.string().min(3).max(40),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post ? post.title : '',
      author: post ? post.author : '',
    },
  })

  const onSubmit = () => {
    console.log('on Submit!')
  }

  console.log('POST RECEIVED IN FORM:')
  console.log(post)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Post title" {...field} />
              </FormControl>
              <FormDescription>Add the title of this post.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Post author" {...field} />
              </FormControl>
              <FormDescription>
                Add your name as the author of this post. If you don`&apos;`t
                want to, you can change to Anonnymous.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PostForm

// id: '1',
//     title: 'The Rise of Artificial Intelligence',
//     body: 'Artificial Intelligence (AI) is revolutionizing various industries...',
//     author: 'John Doe',
//     date: '2024-05-01',
//     comments: [
//       { id: '1', text: 'Great introduction!', username: 'Jane' },
//       {
//         id: '2',
//         text: 'Looking forward to more posts on this topic.',
//         username: 'Alex',
//       },
//     ],
