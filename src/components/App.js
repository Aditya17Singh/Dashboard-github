import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    //   sideBar: "",
    };
  }
  render() {
    return (
      <div>
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
