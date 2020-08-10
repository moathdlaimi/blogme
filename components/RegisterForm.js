import useForm from '../utils/useForm'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

const RegisterForm = () => {
  const [values, setValues, handleChange] = useForm()
  const router = useRouter()
  const register = (e) => {
    e.preventDefault()
    axios.post('/api/users/register', values)
    .then((res)
    => {
      Cookies.set('token', res.data.token)
      router.push('/')
    })
  }


  return (
      <div>
      <form onSubmit={}>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values ? values.firstName : "" }
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values ? values.lastName : "" }
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values ? values.email : "" }
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values ? values.password : "" }
        />
        <input
          type="URL"
          name="profileImage"
          onChange={handleChange}
          value={values ? values.profileImage : "" }
        />

        <input type="submit" value="Register"/>
      </form>
      </div>
  )

}
export default RegisterFormg
