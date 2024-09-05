import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const AuthTabs = () => {
  return (
    <Tabs defaultValue="signin" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <LoginForm />
      </TabsContent>
      <TabsContent value="signup">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  )
}

export default AuthTabs
