import logo from './logo.svg';
import './App.css';
import { Navigate, useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const mainRoutes = { 
  path: "/",
  element: '',
  children: [
    { path: "*", element: <Navigate to="/404" /> },
    // { path: "/", element: <Login /> },
    // { path: "/login", element: <Login /> },
  ],
  
};



function App() {
  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);
  return (
    <>
    {routing}
    <ToastContainer />
    </>
  );
}

export default App;
