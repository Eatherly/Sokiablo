import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import dialogs_css from "./../Dialogs.module.scss";

function DialogItem (props) { 
  return (
    <div className={dialogs_css.dialog}>
      <NavLink  to={"/dialogs/"+props.id} >{props.name}</NavLink>
    </div>
  );
}

export default DialogItem