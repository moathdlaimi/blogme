import PostForm from '../../components/PostForm'

const NewPost = () => {
  return (
    <div>
      <h2>MAKE NEW POST</h2>
      <PostForm buttonValue={"Create Post"} newPost={true}/>
    </div>
  )
}
export default NewPost
