export const formClasses = (element: string): string =>
  element === 'input'
    ? 'bg-slate-50 border-1 focus-visible:ring-1 text-black focus-visible:ring-offset-2 dark:bg-slate-500 dark:text-white'
    : 'uppercase text-xs font-bold text-zinc-500 dark:text-white'
