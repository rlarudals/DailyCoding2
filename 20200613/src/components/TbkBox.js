import React from "react";

class TbkBox extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imgSrc} alt="profile" />
        <div>메뉴 1 : {this.props.t_menu1}</div>
        <div>메뉴 2 : {this.props.t_menu2}</div>
        <div>메뉴 3 : {this.props.t_menu3}</div>
      </div>
    );
  }
}

export default TbkBox;
