import React from "react";

class ImgBox extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imgSrc} alt="profile" />
        <div>이름 : {this.props.s_name}</div>
        <div>나이 : {this.props.s_age}</div>
        <div>성별 : {this.props.s_gender}</div>
      </div>
    );
  }
}

export default ImgBox;
