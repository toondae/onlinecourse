import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className='container mx-auto my-12 flex justify-center items-center'>
        <div className='border-2 rounded-xl p-6'>
            <h1 className='text-2xl font-semibold flex justify-center'>Register</h1>
            <div className='pt-2'>
                <form action="" className=''>
                    <div className='relative my-4'>
                        <input type="text" id=''
                            placeholder='' 
                            className='block w-72 py-2.5 px-0 text-sm bg-transparent border-b-2 border-black rounded-sm focus:outline-none peer'
                            
                        />
                        <label htmlFor="text" 
                            className='absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5'
                        >Firstname :</label>
                    </div>
                    <div className='relative my-4'>
                        <input type="text" id=''
                            placeholder='' 
                            className='block w-72 py-2.5 px-0 text-sm bg-transparent border-b-2 border-black rounded-sm focus:outline-none peer'
                        />
                        <label htmlFor="text"
                            className='absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5'
                        >Lastname :</label>
                    </div>
                    <div className='relative my-4'>
                        <input type="text" id=''
                            placeholder='' 
                            className='block w-72 py-2.5 px-0 text-sm bg-transparent border-b-2 border-black rounded-sm focus:outline-none peer'
                        />
                        <label htmlFor="text"
                            className='absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5'
                        >Username :</label>
                    </div>
                    <div className='relative my-4'>
                        <input type="password" id=''
                            placeholder='' 
                            className='block w-72 py-2.5 px-0 text-sm bg-transparent border-b-2 border-black rounded-sm focus:outline-none peer'
                        />
                        <label htmlFor="password"
                            className='absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5'
                        >Password :</label>
                    </div>
                    <div className='relative my-4'>
                        <input type="password" id=''
                            placeholder='' 
                            className='block w-72 py-2.5 px-0 text-sm bg-transparent border-b-2 border-black rounded-sm focus:outline-none peer'
                        />
                        <label htmlFor="password"
                            className='absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5'                        
                        >Confirm Password :</label>
                    </div>
                    <button 
                        type='submit'
                        className='mt-10 mb-2 w-full bg-black text-white rounded-md py-1 hover:bg-gray-800 '
                    >Register</button>
                    <div>
                        <span className='flex gap2 justify-center text-sm'>Have an account? <Link to='/onlinecourse/login'><p className='text-blue-600'>Register</p></Link></span>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Register