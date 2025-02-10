
import { useRoutes } from 'react-router-dom';
import Home from './home'; 
import Education from './education';  

import Layout from './Appbar'; 
import Skills from './skills';
import Experience from './experience';
import Project from './projects';
import CareerObjectives from './objective';

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> }, 
        { path: "/education", element: <Education /> }, 
        { path: "/skills", element: <Skills /> }, 
        { path: "/experience", element: <Experience /> }, 
        { path: "/projects", element: <Project /> }, 
        { path: "/objective", element: <CareerObjectives /> }, 
        { path: "*", element: <div>Not Found</div> },
      ],
    },
  ]);

  return <>{routes}</>;
};

export default Routes;
