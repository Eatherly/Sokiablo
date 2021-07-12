//import styles from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts'

function Profile (props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts data={props.data} addPost={props.addPost}/>
    </div>
  );
}

export default Profile