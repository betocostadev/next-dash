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

const RegisterForm = () => {
  const { toast } = useToast()
  const router = useRouter()

  const formClasses = (element: string): string =>
    element === 'input'
      ? 'bg-slate-50 border-1 focus-visible:ring-1 text-black focus-visible:ring-offset-2 dark:bg-slate-500 dark:text-white'
      : 'uppercase text-xs font-bold text-zinc-500 dark:text-white'

  const formSchema = z
    .object({
      name: z.string().min(3, {
        message: 'Name is required.',
      }),
      email: z
        .string()
        .min(3, {
          message: 'Email is required.',
        })
        .email({ message: 'Please input a valid e-mail.' }),
      password: z.string().min(5, {
        message: 'A password with a minimmun 5 characters is required.',
      }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['passwordConfirm'], // path of error
    })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // const { username, password } = form.getValues()
    console.log(data)
    toast({
      title: 'Your account was created!',
      description: `Welcome ${data.name}`,
    })
    router.replace('/')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Welcome, create your account to use Next Admin!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formClasses('label')}>Name</FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      className={formClasses('input')}
                      placeholder="My name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formClasses('label')}>Email</FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      className={formClasses('input')}
                      placeholder="me@email.com"
                      {...field}
                    />
                  </FormControl>
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
                      placeholder="MyNewPassword"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formClasses('label')}>
                    Confirm password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={formClasses('input')}
                      placeholder="MyNewPasswordAgain"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Must be the same as your password
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                className="w-full dark:bg-indigo-600 dark:text-white sm:w-1/2"
                type="submit"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default RegisterForm
