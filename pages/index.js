import {useContext} from 'react'
import {PostContext} from '../contexts/PostContext'
import Link from 'next/link'
import PostForm from '../components/PostForm'


const Index = () => {
  const {posts, setPosts} = useContext(PostContext)

  return <div>
  <h1>Index</h1>
  <div className="flex justify-around text-center">
  {posts
    ? posts.map((post,index) => {
      return (
          <div>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{post.body}</p>
            <p>author: {post.author}</p>
          </div>
      )
  })
  : "Please Refresh Page"}
  </div>
  </div>
};

export default Index
