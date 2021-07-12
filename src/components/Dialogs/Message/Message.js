import dialogs_css from "../Dialogs.module.scss";
import React from "react"
function Message(props) {
  let textAreaMes = React.createRef()
  let addMessage = function () {
    alert(textAreaMes.current.value)
  }
  return <div>
    <div className={dialogs_css.message}>{props.message}</div>
    <textarea  ref={textAreaMes} name="" id="" cols="30" rows="2"></textarea>
    <button onClick={addMessage}>add Message</button>
  </div>

}

export default Message;
