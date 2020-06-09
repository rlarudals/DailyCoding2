import React from "react";
import "./styles/styles.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">HelloWorld</div>
        <div className="btn">
          <KeyboardArrowDownIcon />
        </div>
      </div>
    );
  }
}

export default App;
