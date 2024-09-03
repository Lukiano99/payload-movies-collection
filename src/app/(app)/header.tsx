import { FilmIcon } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center gap-2 p-5 bg-muted text-accent-foreground">
      <FilmIcon />
      <Link href="/" className="font-bold">
        <h3>Our Favorite Movies</h3>
      </Link>
      |
      <Link href={'/add'} className="font-light">
        Add A Movie
      </Link>
    </header>
  )
}

export default Header
