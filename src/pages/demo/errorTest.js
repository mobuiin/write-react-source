import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

class ErrorText extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <div>正常内容内容</div>
      </ErrorBoundary>
    );
  }
}

export default ErrorText;
