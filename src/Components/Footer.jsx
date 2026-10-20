import logo from '../assets/logo-bookmark1.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'

const Footer = () => {
  return (
    <footer className='w-full bg-[hsl(229,31%,21%)] px-6 py-10 text-white lg:px-10 lg:py-5'>
      <div className='mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 lg:flex-row lg:justify-between'>
        <div className='flex flex-col items-center gap-10 lg:flex-row lg:gap-12'>
          <a href='/' aria-label='Bookmark home'>
            <img className='w-[148px]' src={logo} alt='Bookmark' />
          </a>
          <nav aria-label='Footer navigation'>
            <ul className='flex flex-col items-center gap-4 text-sm uppercase tracking-widest lg:flex-row lg:gap-8'>
              <li><a className='transition-colors hover:text-[hsl(0,94%,66%)]' href='#features'>Features</a></li>
              <li><a className='transition-colors hover:text-[hsl(0,94%,66%)]' href='#pricing'>Pricing</a></li>
              <li><a className='transition-colors hover:text-[hsl(0,94%,66%)]' href='#contact'>Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className='flex w-full items-center justify-center gap-10 py-6 lg:w-auto lg:py-0'>
          <a href='#' aria-label='Facebook'>
            <img className='h-6 w-6' src={facebook} alt='' />
          </a>
          <a href='#' aria-label='Twitter'>
            <img className='h-5 w-6' src={twitter} alt='' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
