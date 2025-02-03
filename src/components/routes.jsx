
import { useRoutes } from 'react-router-dom';
import Home from './home'; 
// import Summary from './summary'; 
import Layout from './Appbar'; 

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> }, 
        // { path: "/summary", element: <Summary  /> }, 
        { path: "*", element: <div>Not Found</div> },
      ],
    },
  ]);

  return <>{routes}</>;
};

export default Routes;
