import React from "react";

class Lnb extends React.Component {
  render() {
    return (
      <div className="Lnb">
        <div className="Lnb_title"> {this.props.title}</div>
        <div className="Lnb_column">{this.props.column}</div>
      </div>
    );
  }
}

export default Lnb;
