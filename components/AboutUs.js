import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("aaa", this);
    return (
      <>
        <h1>{this.props.str}</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
      </>
    );
  }
}

export default AboutUs;
