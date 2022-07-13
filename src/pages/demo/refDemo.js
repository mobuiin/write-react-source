import React from 'react';

class RefDemo extends React.Component {
  handleTouch = () => {
    const count = this.props.count + 1;
    return {
      text: `refs被触发的次数: ${count}`,
      count,
    };
  };

  render() {
    return <div></div>;
  }
}

export default RefDemo;
