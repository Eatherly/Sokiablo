import dialogs_css from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Route } from "react-router-dom";
//import data from "./../../index"

function Dialogs (props) {
  let dialogsElements = props.data.dialogsData.map(item => <DialogItem name={item.name} id={item.id} /> )
  let messagesElements = props.data.messages.map((item, i) => {
      console.log(item)
      return <Route path={"/dialogs/" + (i + 1)} render={() => <Message message={item.message}/>}/>

  });
  return (
    <div className={dialogs_css.dialogs}>
      <div className={dialogs_css.dialogs_items}>
       {dialogsElements}
      </div>
      <div className={dialogs_css.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;
