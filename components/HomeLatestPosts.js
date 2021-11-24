import React, { useEffect, useState } from 'react'
import PostPreview from './PostPreview';

const HomeLatestPosts = ({ posts }) => {

   const [latestPosts, setLatestPosts] = useState([]);

   useEffect(() => {
      const ultimoPost = posts.length;
      const totalPostsRequired = 5;
      setLatestPosts(posts.slice((ultimoPost - totalPostsRequired),ultimoPost).reverse());
   }, [posts])

   const renderPostRender = () => (
      latestPosts.map(post => (
         <PostPreview post={post} key={post.id}/>
      ))
   )

   return (
      <div className='space-y-4'>
         <h2 className='text-xl font-bold'>Latests Posts</h2>
         {renderPostRender()}
      </div>
   )
}

export default HomeLatestPosts;
