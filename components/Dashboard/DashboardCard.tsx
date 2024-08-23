import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Newspaper } from 'lucide-react'
import { DashboardCardProps } from './props'

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <div>
      <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
        <CardContent>
          <h3 className="text-2xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
            {title}
          </h3>
          <div className="flex gap-5 justify-center items-center">
            {icon}
            <h3 className="text-2xl font-semibold text-slate-500 dark:text-slate-200">
              {count}
            </h3>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardCard
