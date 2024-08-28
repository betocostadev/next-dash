import AnalyticsChart from '@/components/Dashboard/AnalyticsChart'
import DashboardCard from '@/components/Dashboard/DashboardCard'
import PostsTable from '@/components/Posts/PostsTable'
import { Newspaper, Folders, User, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={40} />}
        />
        <DashboardCard
          title="Categories"
          count={10}
          icon={<Folders className="text-slate-500" size={40} />}
        />
        <DashboardCard
          title="Users"
          count={580}
          icon={<User className="text-slate-500" size={40} />}
        />
        <DashboardCard
          title="Comments"
          count={1207}
          icon={<MessageCircle className="text-slate-500" size={40} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest Posts" limit={6} />
    </>
  )
}
