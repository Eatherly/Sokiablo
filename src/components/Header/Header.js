import header_styles from "./Header.module.css"

function Header () {
  return (
    <header className={"header " + header_styles.header}>
      <img
        src="https://www.vectorico.com/download/social_media/Hornet-Circle-Icon.png"
        alt=""
      />
    </header>
  );  
}

export default Header