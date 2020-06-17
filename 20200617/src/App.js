import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      const arr = [
        "/src/assets/images/rkswl.jpg",
        "/src/assets/images/rhcn.jpg",
        "/src/assets/images/qnfld.jpg",
      ];
      this.setState({
        dataList: arr,
      });
    }, 3000);
  };
  render() {
    const { dataList } = this.state;
    return (
      <div className="container">
        {dataList.length === 0 ? (
          <div>치킨들을 가져오고잇어요... ◠ ‿ ◠ </div>
        ) : (
          dataList.map((data) => {
            return <img src={require(data)} alt="" />;
          })
        )}
      </div>
    );
  }
}
export default App;
