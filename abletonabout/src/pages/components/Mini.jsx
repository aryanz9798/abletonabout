import Link from 'next/link'
import React from 'react'

const Mini = () => {
  return (
    <div className='  mt-4 bg-white  border-b-2 border-gray-100 h-max' >
        <ul className='flex flex-row ml-4 mb-4 text-base font-medium '>
        <li className=' text-orange pr-4'>
            <Link href='/'>About</Link>
        </li>
        <li className='pr-4'>
            <Link href='/'>Jobs</Link>        
        </li>
        <li className='pr-4'>
            <Link href='/'>Apprenticeships</Link>        
        </li>                
        </ul>
    </div>
  )
}

export default Mini