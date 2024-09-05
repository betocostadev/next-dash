import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <aside className="hidden md:block h-[100vh] w-[320px]">
          <Sidebar />
        </aside>
        <div className="p-5 w-full md:max-w-[1200px]">{children}</div>
      </div>
    </>
  )
}

export default MainLayout
