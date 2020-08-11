import { useContext } from 'react'
import { PostContext } from '../contexts/PostContext'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  const {posts, setPosts} = useContext(PostContext)
  const {blake, moath} = posts

  return <div>
    <h1>Register</h1>
    <RegisterForm />

  </div>
};

export default Register
