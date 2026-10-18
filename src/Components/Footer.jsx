import logo from '../assets/logo-bookmark1.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'

const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center gap-8 bg-[hsl(229,31%,21%)] px-6 py-10 text-white md:flex-row md:justify-between md:px-10'>
      <div className='flex flex-col items-center gap-10 md:flex-row'>
        <a href='/' aria-label='Bookmark home'>
          <img className='w-[148px]' src={logo} alt='Bookmark' />
        </a>
        <nav aria-label='Footer navigation'>
          <ul className='flex flex-col items-center gap-4 text-sm uppercase tracking-widest md:flex-row'>
            <li><a className='transition-colors hover:text-[hsl(0,94%,66%)]' href='#features'>Features</a></li>
            <li><a className='transition-colors hover:text-[hsl(0,94%,66%)]' href='#pricing'>Pricing</a></li>
            <li><a className='transition-colors hover:text-[hsl(0,94%,66%)]' href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className='w-full flex justify-center items-center gap-10 py-6'>
        <a href='#' aria-label='Facebook'>
          <img className='h-6 w-6' src={facebook} alt='' />
        </a>
        <a href='#' aria-label='Twitter'>
          <img className='h-5 w-6' src={twitter} alt='' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
