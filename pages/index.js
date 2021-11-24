import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import HomeHeader from '../components/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts';

export default function Home({ posts }) {
	return (
		<div className='m-10 space-y-5'>
			<HomeHeader/>
			<HomeLatestPosts posts={posts}/>
		</div>
	)
}

export async function getServerSideProps(){
	
	const postsRes = await axios.get('http://localhost:1337/posts');

	return {
		props: {
			posts: postsRes.data
		}
	}
}