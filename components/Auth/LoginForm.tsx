'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useToast } from '@/hooks/use-toast'
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

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { formClasses } from '@/lib/styler'

const LoginForm = () => {
  const { toast } = useToast()
  const router = useRouter()

  const formSchema = z.object({
    username: z.string().min(1, {
      message: 'Username or email is required.',
    }),
    password: z.string().min(1, {
      message: 'Password is required.',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // const { username, password } = form.getValues()
    console.log(data)
    toast({
      title: 'You are now logged in',
      description: `Welcome back ${data.username}`,
    })
    router.replace('/')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Welcome to Next Admin. Use your credentials below to access your
          account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formClasses('label')}>
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      className={formClasses('input')}
                      placeholder="me@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter your username or email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formClasses('label')}>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={formClasses('input')}
                      placeholder="MyPassword"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                className="w-full dark:bg-indigo-600 dark:text-white sm:w-1/2"
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default LoginForm
