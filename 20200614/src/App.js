import React from "react";
import ImgBox from "./ImgBox";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 1,
    };
  }
  render() {
    const { tab } = this.state;
    return (
      <div className="app">
        <button onClick={() => this._clickBtnHandler(1)}>버튼1</button>
        <button onClick={() => this._clickBtnHandler(2)}>버튼2</button>

        {tab === 1 ? (
          <ImgBox
            imgSrc="https://www.placehold.it/125x125/eee"
            s_name="김경민"
            s_age="17세"
            s_gender="여성"
          />
        ) : null}
        {tab === 2 ? (
          <ImgBox
            imgSrc="https://www.placehold.it/125x125/777"
            s_name="윤상호"
            s_age="32세"
            s_gender="남성"
          />
        ) : null}
      </div>
    );
  }

  _clickBtnHandler = (nextTab) => {
    this.setState({
      tab: nextTab,
    });
  };
}

export default App;
