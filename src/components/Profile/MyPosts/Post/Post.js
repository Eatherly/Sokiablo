import styles from './Post.module.scss'

function Post (props) {
  return (
    <div>
      <p>
        {props.message}
        <span>{props.likesCount}</span>
      </p>
    </div>
  )
}

export default Post