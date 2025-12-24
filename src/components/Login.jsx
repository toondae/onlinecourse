import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState();

    const onChangeUsername = () => {
        setUsername()
    }

    const onChangePassword = () => {
        setPassword()
    }

  return (
    <div className='container mx-auto my-12 flex justify-center items-center'>
        <div className=' border-2 rounded-xl p-6'>
            <h1 className='text-2xl font-semibold flex justify-center'>Login</h1>
            <div className='pt-2'>
                <form action="" onSubmit={onsubmit}>
                    <div className='relative my-4'>
                        <input type="text" id='username' name='name' 
                            onChange={onChangeUsername}
                            placeholder=''
                            className='block w-72 py-2.5 px-0 text-sm bg-transparent border-b-2 border-black rounded-sm focus:outline-none focus:ring-0 peer'
                        />
                        <label htmlFor="name"
                            className='absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Username :
                        </label>
                    </div>
                    <div className='relative my-4'>
                        <input type="password" id='password' name='name' 
                            onChange={onChangePassword} 
                            placeholder=''
                            className='block w-72 py-2.5 px-0 text-sm bg-transparent border-b-2 border-black rounded-sm focus:outline-none focus:ring-0 peer'
                        />
                        <label htmlFor="name"
                            className='absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Password :
                        </label>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 '>
                            <input type="checkbox" className='hover:cursor-pointer'/>
                            <label htmlFor="">Remember me</label>
                        </div>
                        <span className='text-blue-600'>Forgot Password?</span>
                    </div>
                    <button 
                        type='submit'
                        className='mt-10 mb-2 w-full bg-black text-white rounded-md py-1 hover:bg-gray-800 '
                    >Log in</button>
                    <div>
                        <span className='flex gap-2 justify-center text-sm'>Do not have an account? <Link to='/register'><p className='text-blue-600'>Register</p></Link></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login