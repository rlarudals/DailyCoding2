import React from "react";
import TbkBox from "./components/TbkBox";
import menu1 from "../src/assets/Image/menu1.jpg";
import menu2 from "../src/assets/Image/menu2.jpg";
import menu3 from "../src/assets/Image/menu3.jpg";

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
      <div>
        <button onClick={() => this._clickBtnhandler(1)}>
          동대문 엽기 떡볶이
        </button>
        <button onClick={() => this._clickBtnhandler(2)}>신전 떡볶이</button>
        <button onClick={() => this._clickBtnhandler(3)}>응급실 떡볶이</button>

        {tab === 1 ? (
          <TbkBox
            imgSrc={menu1}
            t_menu1="엽기 떡볶이"
            t_menu2="엽기 닭볶음탕"
            t_menu3="참숯 뼈없는 닭발"
          />
        ) : null}
        {tab === 2 ? (
          <TbkBox
            imgSrc={menu2}
            t_menu1="떡볶이"
            t_menu2="치즈 떡볶이"
            t_menu3="신전 김밥"
          />
        ) : null}
        {tab === 3 ? (
          <TbkBox
            imgSrc={menu3}
            t_menu1="응급실 국물 떡볶이"
            t_menu2="응급실 국물 어묵"
            t_menu3="응급실 국물 닭볶음탕"
          />
        ) : null}
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
