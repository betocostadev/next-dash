import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl">Dashboard</h1>
      <div>
        <p>Admin dashboard being created</p>
        <Button variant="destructive" size="lg" className="text-white mt-2">
          Get out
        </Button>
      </div>
    </>
  )
}
