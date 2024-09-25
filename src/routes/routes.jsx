import React from 'react';


const appRoutes = [
  {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
          { path: "*", element: <Navigate to="/404" /> },
          { path: "", element: <Dashboard /> },
          
          /** category */
          { path: "category", element: <CategoryList /> },
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
export const permittedRoutes = () => {
  const token = getToken();
  if (token) {
      return appRoutes;
  }

  return [];
};