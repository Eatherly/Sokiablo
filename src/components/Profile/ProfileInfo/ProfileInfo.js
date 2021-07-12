import styles from './ProfileInfo.module.scss'

function ProfileInfo () {
  return (
    <div>
      <div>
        <img
          src="https://s.tmimgcdn.com/scr/800x500/84100/abstract-vibrant-liquid-backgrounds-vol1-no84151_84151-original.jpg"
          alt=""
        />
      </div>
      <div className={styles.descriptionBlock}>
        ava + descripion
        </div>
    </div>
  );
}

export default ProfileInfo