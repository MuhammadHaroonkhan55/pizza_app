import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import AuthForm from './features/auth/AuthForm'; 
import ProtectedRoute from './ui/ProtectedRoute';
import { AuthProvider } from './features/auth/AuthContext';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <ProtectedRoute element={<Menu />} />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <ProtectedRoute element={<Cart />} />,
      },
      {
        path: '/order/new',
        element: <ProtectedRoute element={<CreateOrder />} />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <ProtectedRoute element={<Order />} />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: '/login',
        element: <AuthForm />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
