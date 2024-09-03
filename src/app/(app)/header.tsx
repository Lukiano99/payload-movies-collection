import { Button } from '@/components/ui/button'
import { FilmIcon, PlusCircleIcon } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 text-accent-foreground">
      <div className="flex items-center gap-2 hover:scale-105 transition-all">
        <FilmIcon />
        <Link href="/" className="font-bold">
          <h3>My Movies to Watch</h3>
        </Link>
      </div>
      <Link href={'/add'} className="font-light">
        <Button className="gap-2">
          <PlusCircleIcon size={16} />
          Add a movie
        </Button>
      </Link>
    </header>
  )
}

export default Header
