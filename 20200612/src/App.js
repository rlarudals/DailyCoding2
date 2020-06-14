import React from "react";
// src/assets/images 안에 있는 sc, sri 파일을 쓸 수 있게 import 해온다
import sc from "../src/assets/images/sc.jpg";
import sci from "../src/assets/images/sci.jpg";

class App extends React.Component {
  // 생성자, react에서 가장 먼저 실행 하는 함수
  constructor(props) {
    super(props);
    // state 안에 json 으로 viewer 를 저장해준다
    this.state = {
      viewer: sc,
    };
  }
  render() {
    // state 안에 저장한 viewer 를 사용 할 수 있게 json으로 선언해 준다
    const { viewer } = this.state;
    return (
      <div className="container">
        <div className="top">
          {/* viewer를 이미지로 볼 수 있게 이미지 태그를 써준다 */}
          <img src={viewer} />
        </div>
        <div className="content">
          {/* 버튼을 누르면 (onClick) sc, sci를 호출 하며 _valueChangeHandler 함수를 실행 한다 */}
          <button onClick={() => this._valueChangeHandler(sc)}>스펙트럼</button>
          <button onClick={() => this._valueChangeHandler(sci)}>
            수소 핵융합 반응 과정
          </button>
        </div>
      </div>
    );
  }
  // 뷰어 안에는 sc가 들어가 있기 때문에 변경 하기 위해서 _valueChangeHandler 라는 함수를 실행 한 것이다
  // state를 변경 할 수 있는 건 setState 이기 때문에 setState를 사용 한 것이다
  _valueChangeHandler = (image) => {
    this.setState({
      viewer: image,
    });
  };
}

// App 을 프로젝트에서 사용 할 수 있게 export 해준것이다
export default App;
