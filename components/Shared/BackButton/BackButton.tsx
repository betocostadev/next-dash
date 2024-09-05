import { ArrowLeftCircle } from 'lucide-react'
import { BackButtonProps } from './props'
import Link from 'next/link'

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className="text-slate-500 dark:text-slate-200 hover:underline flex items-center gap-1 font-bold mb-5"
    >
      <ArrowLeftCircle
        className="text-slate-500 dark:text-slate-200"
        size={24}
      />
      <span className="text-md pl-2">{text}</span>
    </Link>
  )
}

export default BackButton
