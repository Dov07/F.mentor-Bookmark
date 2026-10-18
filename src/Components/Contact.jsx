import { useState } from 'react'
import errorIcon from '../assets/icon-error.svg'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!event.currentTarget.checkValidity()) {
      setError("Whoops, make sure it's an email")
      return
    }

    setError('')
  }

  return (
    <div className='w-full h-auto flex flex-col justify-center items-center bg-[hsl(231,69%,60%)] p-6'>
        <div className='flex flex-col gap-2'>
            <h4 className='font-medium uppercase text-center text-white tracking-[.3rem] text-sm '>35.000+ Already Joined</h4>
            <p className='text-2xl text-center text-white'>Stay-up-to-date with what we're doing</p>
        </div>
        <form className='flex w-full max-w-md flex-col gap-4 py-6' noValidate onSubmit={handleSubmit}>
            <div className={`rounded-md ${error ? 'bg-[hsl(0,94%,66%)] p-1' : ''}`}>
                <div className='relative'>
                    <input
                        className={`w-full rounded-md bg-white px-4 py-3 pr-12 text-[hsl(229,31%,21%)] outline-none ${error ? 'border-2 border-[hsl(0,94%,66%)]' : 'border-2 border-transparent'}`}
                        type="email"
                        placeholder='email@example.com'
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value)
                          if (event.target.validity.valid) setError('')
                        }}
                        required
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? 'email-error' : undefined}
                    />
                    {error && <img className='absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2' src={errorIcon} alt="" />}
                </div>
                {error && <p className='px-2 pt-1 text-xs italic text-white' id='email-error'>{error}</p>}
            </div>
            <button className='cursor-pointer rounded-md bg-[hsl(0,94%,66%)] px-4 py-3 font-medium text-white hover:bg-white hover:text-[hsl(0,94%,66%)]' type="submit">
                Contact Us
            </button>
        </form>
    </div>
  )
}

export default Contact