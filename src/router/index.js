import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import TestCallback from '@/pages/testCallback/index';
import Home from '@/pages/demo';
import ErrorText from '@/pages/demo/errorTest';

const routeList = [
  { path: '/', element: <TestCallback /> },
  { path: '/demo', element: <Home /> },
  { path: '/error', element: <ErrorText /> },
];

const RouterList = () => {
  return useRoutes(routeList);
};

const BasicRoute = () => {
  return (
    <Router>
      <RouterList />
    </Router>
  );
};

export default BasicRoute;
