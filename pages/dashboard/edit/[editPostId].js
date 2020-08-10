import PostForm from "../../../components/PostForm";
import { useEffect, useContext, useState } from "react";
import { PostContext } from "../../../contexts/PostContext";

const EditPost = ({ editPostId }) => {
  const { posts, setPosts } = useContext(PostContext);
  const [post, setPost] = useState({ loading: true, data: null });

  console.log("EditPost: when do I render");
  useEffect(() => {
    if (!posts.length) {
      console.log("UseEffect no posts: when do I render");
      return;
    }

    console.log(posts.length);
    posts.find((post) => {
      if (post._id === editPostId) {
        setPost({ loading: false, data: post });
        console.log("UseEffect postFind: when do I render");
      }
    });
  }, [posts]);

  return (
    <div>
      {post.loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-3xl">Loading...</div>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl text-center pt-12">Update post</h2>
          <PostForm buttonValue={"Update Post"} post={post.data} />
        </div>
      )}
    </div>
  );
};

EditPost.getInitialProps = async ({ query }) => {
  console.log(query);
  return {
    editPostId: query.editPostId,
  };
};

export default EditPost;

// import PostForm from '../../../components/PostForm'
// import { useRouter } from 'next/router'
// import {useContext, useEffect, useState} from 'react'
// import {PostContext} from '../../../contexts/PostContext'
//
//
// const EditPost = () => {
//
//   const router = useRouter()
//   let { editPostId } = router.query
//   const { posts, setPosts } = useContext(PostContext)
//   const [post, setPost] = useState(null)
//
//   useEffect(() => {
//     posts.find((post) => {
//       if(post._id === editPostId){
//         setPost(post)
//       }
//     })
//   }, [{ editPostId }, { posts } ])
//   return (
//
//     <div>
//       <h2>UPDATE POST</h2>
//       {
//         (editPostId && posts.length && post)
//         ?<PostForm buttonValue={"Update Post"} post={post}/>
//         : "loading"
//       }
//
//     </div>
//   )
// }
// export default EditPost
