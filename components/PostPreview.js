import React from 'react';
import Link from 'next/link';

const PostPreview = ({ post }) => {
   return (
      <Link href={`/posts/${post.slug}`}>
         <div className='border p-5 rounded-lg space-y-2 bg-white cursor-pointer transition ease duration-400 shadow-md hover:shadow-xl '>
            <h3 className='text-xl font-bold'>{post.title}</h3>
            <p>{post.description}</p>
         </div>
      </Link>
   )
}

export default PostPreview
