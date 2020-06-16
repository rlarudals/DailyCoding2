import React from "react";
import Lnb from "../src/components/Lnb";

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
      <div className="btnBt">
        <button className="btn" onClick={() => this._clickBtnhandler(1)}>
          About
        </button>
        <button className="btn" onClick={() => this._clickBtnhandler(2)}>
          Notice
        </button>
        <button className="btn" onClick={() => this._clickBtnhandler(3)}>
          My Page
        </button>
        {tab === 1 ? <Lnb title="About" column="Home - About" /> : null}
        {tab === 2 ? <Lnb title="Notice" column="Home - Notice" /> : null}
        {tab === 3 ? <Lnb title="My Page" column="Home - My Page" /> : null}
      </div>
    );
  }
  _clickBtnhandler = (nextTab) => {
    this.setState({
      tab: nextTab,
    });
  };
}

export default App;
