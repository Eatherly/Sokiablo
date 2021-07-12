import styles from './MyPosts.module.scss'
import Post from './Post/Post';
import React from 'react'



function MyPosts (props) {
   //debugger;
    console.log(props.data.posts)
  let postsElements = props.data.posts.map((item) => (
    <Post message={item.message} key={item.likes} likesCount={item.likes} />
  ));
  let newPostElement = React.createRef()

  let  addPost = () => {
      let text = newPostElement.current.value
      console.log(props.data.posts[2])
      props.addPost()
      console.log(props.data.posts[2])

  }

  return (
    <div className={styles.postBlock}>
      <h3>My MyPosts</h3>
      <div>
        <textarea name="" ref={newPostElement} cols="30" rows="10"></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts


