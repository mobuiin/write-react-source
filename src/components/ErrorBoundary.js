import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
  }

  render() {
    if (this.state.isError) {
      return <h1>Something went wrong!! Please call kk🚬</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
