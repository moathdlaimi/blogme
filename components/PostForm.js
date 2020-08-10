import useForm from '../utils/useForm'
import axios from 'axios'
import {useContext, useEffect} from 'react'
import {PostContext} from '../contexts/PostContext'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const PostForm = ({ buttonValue, post, newPost }) => {
  const [values, setValues, handleChange] = useForm()
  const { posts, setPosts } = useContext(PostContext)
  const router = useRouter()

  useEffect(() => {
    setValues(post)

  }, [])

  const createPost = (e) => {
      e.preventDefault();

      if (newPost) {
        axios
          .post("/api/posts", values)
          .then((res) => {
            setPosts((posts) => [...posts, res.data.data]);
            router.push('/')

          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        axios
          .put("/api/posts/" + values._id, values)
          .then((res) => {
            //retrieves the index position of the edited post
            const indexValue = posts.findIndex((index) => index._id === post._id);

            // creates a temporary copy of the posts array
            const updatedPosts = [...posts];

            //removes the previous version of the now updated post from the array and inserts the edited post in its place
            updatedPosts.splice(indexValue, 1, res.data.data);

            //sets the value of posts equal to our updated array
            setPosts((posts) => [...updatedPosts]);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }

    };
  // const createPost = (event) => {
  //     event.preventDefault()
  //     if(newPost){
  //       axios.post('/api/posts', values).then((res) => {
  //           setPosts((posts) => [...posts,res.data.data])
  //       }).catch((err) => {
  //           console.log(err.message);
  //       })
  //     } else {
  //
  //       axios.put('/api/posts/' + values._id, values)
  //       .then((res) => {
  //         setPosts((posts) => [...posts,res.data.data])
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //     }
  //
  //     console.log(values);
  //     setValues({})
  // }

  return (
    <form onSubmit={createPost} className="grid gap-4 p-16">
      <input className="border-4 border-black" type="text" name="title" onChange={handleChange} value={values ? values.title : "" }/>
      <textarea name="body"
                onChange={handleChange}
                value={values ? values.body : ""} className="border-4 border-black">
      </textarea >
      <textarea name="author"
                onChange={handleChange}
                value={values ? values.author : ""} className="border-4 border-black">
      </textarea>
      <input type="submit" value={buttonValue}/>
    </form>
  )
}

export default PostForm
