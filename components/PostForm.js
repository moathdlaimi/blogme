import useForm from '../utils/useForm'
import axios from 'axios'
import {useContext} from 'react'
import {PostContext} from '../contexts/PostContext'


const PostForm = () => {
  const [values, setValues, handleChange] = useForm()
  const {posts, setPosts} = useContext(PostContext)

  const createPost = (event) => {
      event.preventDefault()
      axios.post('/api/posts', values).then((res) => {
          setPosts((posts) => [...posts,res.data.data])
      }).catch((err) => {
          console.log(err.message);
      })
      console.log(values);
      setValues({})
  }

  return (
    <form onSubmit={createPost} className="grid gap-4 p-16">
      <input className="border-4 border-black" type="text" name="title" onChange={handleChange} value={values.title || "" }/>
      <textarea name="body"
                onChange={handleChange}
                value={values.body || ""} className="border-4 border-black">
      </textarea >
      <textarea name="author"
                onChange={handleChange}
                value={values.author || ""} className="border-4 border-black">
      </textarea>
      <input type="submit" />
    </form>
  )
}

export default PostForm
