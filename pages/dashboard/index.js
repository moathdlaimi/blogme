import PostForm from '../../components/PostForm'
import {useContext} from 'react'
import {PostContext} from '../../contexts/PostContext'
import Link from 'next/link'



const Dashboard = () => {
  const {posts, setPosts} = useContext(PostContext)
    return (
      <div>
        <h1>Dashboard</h1>
        {posts
          ? posts.map((post,index) => {
            return (
                <div>
                <Link href={"/dashboard/edit/" + post._id}>
                <a>
                  <h1 className="text-2xl font-bold">{post.title}</h1>
                  </a>
                  </Link>
                </div>
            )
        })
      :"Please Refresh Page"}
      </div>
    )
}

export default Dashboard
