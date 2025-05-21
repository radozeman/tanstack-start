import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button/button'
import { StrvLogo } from '@/components/ui/icons/strv-logo'
import { authClient } from '@/features/auth/client'

const Header = () => {
  return (
    <header className="w-full py-2 sm:py-4">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <StrvLogo />
        </Link>
        <div>
          <Link to="/events">
            <Button variant="ghost" className="uppercase">
              events
            </Button>
          </Link>
        </div>
        <Button className="capitalize">sign out</Button>
      </nav>
    </header>
  )
}

export { Header }
