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
      const arr = ["가", "나", "다"];
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
          <div>데이터 불러오는 중 </div>
        ) : (
          dataList.map((data, idx) => {
            return (
              <div>
                {idx + 1}. {data}
              </div>
            );
          })
        )}
      </div>
    );
  }
}
export default App;
