import React from "react";

class App extends React.Component {
  // 생성자
  constructor(props) {
    super(props);

    this.state = {
      viewer: "",
    };
  }

  render() {
    const { viewer } = this.state; // ES6 문법

    return (
      <div>
        <h1>{viewer}</h1>
        <button onClick={() => this._valueChangeHandler("김경민1")}>
          변경1
        </button>
        <button onClick={() => this._valueChangeHandler("김경민2")}>
          변경2
        </button>
        <button onClick={() => this._valueChangeHandler("김경민3")}>
          변경3
        </button>
      </div>
    );
  }
  ß;
  _valueChangeHandler = (txt) => {
    this.setState({
      viewer: txt,
    });
  };
}

export default App;
