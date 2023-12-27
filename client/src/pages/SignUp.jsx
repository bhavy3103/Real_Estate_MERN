import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='text-lg border rounded-xl p-3 hover:shadow-md' id='username' />
        <input type="email" placeholder='email' className=' text-lg border rounded-xl p-3 hover:shadow-md' id='email' />
        <input type="password" placeholder='password' className=' text-lg border rounded-xl p-3 hover:shadow-md' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp;
