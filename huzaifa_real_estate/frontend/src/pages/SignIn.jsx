import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from "../redux/User/userSlice";


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      //setLoading(true);
    const res = await fetch('/api/auth/signin', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    console.log(data);
    if(data.success === false) {
      dispatch(signInFailure(data.message));
      //setLoading(false);
      //setError(data.message);
      return;
    }
    dispatch(signInSuccess(data));
    // setLoading(false);
    // setError(null);
    navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
      // setLoading(false);
      // setError(error.message);
    }
    
  };
  // console.log(formData);

  return (
    <div className='p-10 mt-16 max-w-lg mx-auto border border-green-300 rounded-3xl shadow-sm' >
      <h1 className='text-3xl text-center font-semibold my-7'>SignIn</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='email' className='border  p-3 outline-none border-green-300 rounded-full' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password' className='border p-3 outline-none border-green-300 rounded-full' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-green-600 text-white p-3 mt-14 rounded-full uppercase hover:opacity-50 disabled:opacity-80'>
          {loading ? 'loading': 'Sign In'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account</p>
        <Link to={"/signup"}>
        <span className='text-blue-600'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}