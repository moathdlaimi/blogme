import { useContext } from 'react'
import { PostContext } from '../contexts/PostContext'

const Login = () => {
  const {posts, setPosts} = useContext(PostContext)
  const {blake, moath} = posts

  return <div>
    <h1>Login</h1>

  </div>
};

export default Login
