import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
    <div className='p-10 mt-16 max-w-lg mx-auto border border-green-300 rounded-3xl shadow-sm' >
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 outline-none border-green-300 rounded-full' id='username'/>
        <input type="text" placeholder='email' className='border  p-3 outline-none border-green-300 rounded-full' id='email'/>
        <input type="password" placeholder='password' className='border p-3 outline-none border-green-300 rounded-full' id='password'/>
        <button className='bg-green-600 text-white p-3 mt-14 rounded-full uppercase hover:opacity-50 disabled:opacity-80'>SignUp</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already have an account</p>
        <Link to={"/signin"}>
        <span className='text-blue-600'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}