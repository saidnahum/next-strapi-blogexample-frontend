import React from 'react';
import Link from 'next/link';

const Navbar = () => {
   return (
      <nav className='bg-gray-700 w-full p-3 text-white'>
         <div className='flex justify-between container mx-auto'>
            <Link href='/'><span className='text-2xl font-bold cursor-pointer hover:text-gray-300'>PixelBlog</span></Link>
            <Link href='/posts'><span className='font-bold cursor-pointer hover:text-gray-300'>All Posts</span></Link>
         </div>
      </nav>
   )
}

export default Navbar
