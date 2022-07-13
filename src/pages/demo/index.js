import React from 'react';
import RefDemo from './refDemo';

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.myRef = null;
    this.callMyRef = element => (this.myRef = element);

    this.state = {
      text: '',
      count: 0,
    };
  }

  handleClick = () => {
    // const { text, count } = this.myRef.current.handleTouch();
    // this.setState({
    //   text,
    //   count,
    // });

    if (this.myRef) {
      const { text, count } = this.myRef.handleTouch();
      this.setState({
        text,
        count,
      });
    }
  };

  componentDidMount() {
    // this.handleClick();
  }

  render() {
    const { text, count } = this.state;
    return (
      <>
        {/* <RefDemo ref={this.myRef} count={count}></RefDemo> */}
        <RefDemo ref={this.callMyRef} count={count}></RefDemo>
        <div>
          <button onClick={this.handleClick}>click</button>
          <div>{text}</div>
        </div>
      </>
    );
  }
}

class Context extends React.Component {
  render() {
    return (
      <>
        <div>Hello kk!</div>
      </>
    );
  }
}

function withTiming(WrappedComponent) {
  return class extends WrappedComponent {
    constructor(props) {
      super(props);
      this.state = {
        start: Date.now(),
        end: 0,
      };
    }

    componentDidMount() {
      super.componentDidMount && super.componentDidMount();
      this.setState({
        end: Date.now(),
      });
    }

    componentDidUpdate() {
      console.log(this.state.start, this.state.end);
      console.log(`${WrappedComponent.name} 组件渲染时间为 ${this.state.end - this.state.start} ms`);
    }
    render() {
      return super.render();
    }
  };
}

export default withTiming(Context);
