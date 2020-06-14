import React from "react";
import sc from "../src/assets/images/sc.jpg";
import sci from "../src/assets/images/sci.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewer: sc,
    };
  }
  render() {
    const { viewer } = this.state;
    return (
      <div className="container">
        <div className="top">
          <img src={viewer} />
        </div>
        <div className="content">
          <button onClick={() => this._valueChangeHandler(sc)}>스펙트럼</button>
          <button onClick={() => this._valueChangeHandler(sci)}>
            수소 핵융합 반응 과정
          </button>
        </div>
      </div>
    );
  }
  _valueChangeHandler = (image) => {
    this.setState({
      viewer: image,
    });
  };
}

export default App;
