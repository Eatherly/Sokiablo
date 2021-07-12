import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App (props) {
  console.log(props.data)
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="nav">
          <Navbar />
        </div>
        <div className="content">
          <Route  path="/profile" render={ () => <Profile addPost={props.data.addPost} data={props.data} />} />
          <Route path="/dialogs" render={() => <Dialogs data={props.data}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
