import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import MarkdownIt from 'markdown-it';

const PostPage = ({post}) => {

   return (
      <div className='container mx-auto p-5'>
         {
            post.map(i => (
               
               <article key={i.id} className='space-y-5'>
                  
                  <header className='space-y-3'>
                     <h1 className='text-3xl font-bold'>{i.title}</h1>
                     <h2 className='text-lg text-gray-400'>{i.description}</h2>
                  </header>
                  <section className='w-full mx-auto prose max-w-3xl text-justify'>
                     <ReactMarkdown 
                        transformImageUri={uri => /^https?:/.test(uri)
                           ? uri
                           : `http://localhost:1337${uri}`}
                        escapeHtml={false}
                     >
                        {i.content}
                     </ReactMarkdown>
                  </section>
               </article>
            ))
         }
      </div>
   )
}

export default PostPage;

export async function getStaticProps({ params }){

   // Cuando se filtra por algun campo devuelve un arreglo [] en vez de un objeto{}
   // si se filtra solo por id automaticamente devuelve un objeto {}
   // Cuando se devuelve un arreglo [] se debe mapear para obtener sus propiedades

   const postRes = await axios.get(`http://localhost:1337/posts/?slug=${params.slug}`)

   return {
      props: {
         post: postRes.data
      }
   }
}

export async function getStaticPaths(){
   const postsRes = await axios.get('http://localhost:1337/posts');

   const paths = postsRes.data.map((post) => {
      return {params: {slug: post.slug}}
   })

   return {
      paths,
      fallback: false
   }
}
