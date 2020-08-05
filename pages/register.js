import { useContext } from 'react'
import { PostContext } from '../contexts/PostContext'

const Register = () => {
  const {posts, setPosts} = useContext(PostContext)
  const {blake, moath} = posts

  return <div>
    <h1>Register</h1>

  </div>
};

export default Register
