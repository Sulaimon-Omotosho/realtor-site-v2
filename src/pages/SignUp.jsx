import { React, useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { db } from '../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData
  const navigate = useNavigate()

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  async function onSubmit(e) {
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      updateProfile(auth.currentUser, {
        displayName: name,
      })
      const user = userCredential.user
      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      // toast.success(Successfull)
      navigate('/')
    } catch (error) {
      toast.error('Registration failed')
    }
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>Sign Up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6 '>
          <img
            src='https://media.istockphoto.com/id/1402790955/photo/bunch-of-colored-keys.jpg?s=612x612&w=0&k=20&c=4M-PYxz-jeSqPU_HFDc6U4hz9tXuhvbsuD6vGoOyaQg='
            alt='key'
            className='w-full rounded-2xl shadow-lg'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input
              className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
              type='text'
              id='name'
              value={name}
              onChange={onChange}
              placeholder='Full Name'
            />
            <input
              className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
              type='email'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
            />
            <div className='relative mb-6'>
              <input
                className=' w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={onChange}
                placeholder='Password'
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p className=''>
                Have an account?
                <Link
                  to='/sign-in'
                  className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'
                >
                  Login
                </Link>
              </p>
              <Link
                to='/forgot-password'
                className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
              >
                Forgot Password?
              </Link>
            </div>
            <button
              className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800'
              type='submit'
            >
              Sign UP
            </button>
            <div
              className='my-4 flex items-center before:border-t before:flex-1 before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300'
            >
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}