import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import TestCallback from '../pages/testCallback/index';

const routeList = [
  { path: '/', element: <TestCallback /> },
]

const RouterList = () => {
  return useRoutes(routeList)
}

const BasicRoute = () => {
  return (
    <Router>
      <RouterList />
    </Router>
  )
}

export default BasicRoute;