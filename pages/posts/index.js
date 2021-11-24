import React from 'react';
import axios from 'axios';
import PostPreview from '../../components/PostPreview';

const Posts = ({ posts }) => {
   const postDesc = posts.reverse();
   return (
      <div className='container mx-auto p-5 space-y-5'>
         <h2 className='text-3xl font-bold text-gray-700'>Posts</h2>
         {postDesc.map(post => (
            <PostPreview post={post} key={post.id}/>
         ))}
      </div>
   )
}

export default Posts;

export async function getStaticProps(){
   const postRes = await axios.get('http://localhost:1337/posts');

   return {
      props: {
         posts: postRes.data
      }
   }
}