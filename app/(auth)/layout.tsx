import { ThemeToggle } from '@/components/ThemeToggle'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="absolute top-10 right-4 text-white">
        <ThemeToggle />
      </div>
      {children}
    </div>
  )
}

export default AuthLayout
