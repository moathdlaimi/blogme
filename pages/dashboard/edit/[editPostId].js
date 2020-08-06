import PostForm from '../../../components/PostForm'
import { useRouter } from 'next/router'
import {useContext, useEffect, useState} from 'react'
import {PostContext} from '../../../contexts/PostContext'


const EditPost = () => {

  const router = useRouter()
  let { editPostId } = router.query
  const { posts, setPosts } = useContext(PostContext)
  const [post, setPost] = useState(null)

  useEffect(() => {
    posts.find((post) => {
      if(post._id === editPostId){
        setPost(post)
      }
    })
  }, [{ editPostId }, { posts } ])
  return (

    <div>
      <h2>UPDATE POST</h2>
      {
        (editPostId && posts.length && post)
        ?<PostForm buttonValue={"Update Post"} post={post}/>
        : "loading"
      }

    </div>
  )
}
export default EditPost
