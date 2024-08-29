import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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
import { Button } from '../ui/button'

import { Post } from '@/types/posts'
import { Textarea } from '../ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

const PostForm = ({ post }: { post?: Post }) => {
  const formSchema = z.object({
    title: z
      .string()
      .min(10, { message: 'Title must be at least 10 characters.' })
      .max(100, { message: 'Title must be less than 101 characters.' }),
    body: z
      .string()
      .min(50, {
        message: 'Posts must have a minimum length of 50 characters.',
      })
      .max(500, { message: 'Max length for posts is 500 characters.' }),
    author: z.string().min(3).max(40),
    date: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // const { title, body, author, date } = form.getValues()
    console.log('Form data')
    console.log(data)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit post</CardTitle>
        <CardDescription>You can edit your post below</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post</FormLabel>
                  <FormControl>
                    <Textarea placeholder="This post is about..." {...field} />
                  </FormControl>
                  <FormDescription>Write your post here</FormDescription>
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
                    <Input
                      placeholder="Post author"
                      disabled={post?.author ? true : false}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Add your name as the author of this post. If you
                    don`&apos;`t want to, you can change to Anonnymous.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input placeholder="Publish date" {...field} />
                  </FormControl>
                  <FormDescription>
                    Add the date you want the post to be published, in case of
                    editing, the date for the editing to be published.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default PostForm
