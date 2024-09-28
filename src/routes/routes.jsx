import React from 'react';
import DashboardLayout from '../components/DashboardLayout/DashboardLayout';
import { Navigate } from 'react-router-dom';
import Dashboard from '../components/Dasboard/Dashboard';




const appRoutes = [
  {
      path: "dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
          { path: "*", element: <Navigate to="/404" /> },
          { path: "", element: <Dashboard></Dashboard> },
          
          // /** category */
          { path: "category", element: <CategoryList></CategoryList> },
          { path: "category/create", element: <CategoryCreate /> },
          { path: "category/edit/:id", element: <CategoryEdit /> },

          /** product */
          { path: "product", element:  <Product /> },
          { path: "product/create", element: <ProductCreate/> },
          { path: "product/edit/:id", element: <ProductEdit /> },
      ],
  },
]; 

/* Generate permitted routes */
// export const permittedRoutes = () => {
//   const token = getToken();
//   if (token) {
//       return appRoutes;
//   }

//   return appRoutes;

//   return [];
// };
export const permittedRoutes = () => {
  return appRoutes;
};