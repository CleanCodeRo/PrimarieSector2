import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/transportation',
    element: <div className="p-8"><h1 className="text-3xl font-bold">Transportation Page</h1></div>
  },
  {
    path: '/clean-energy', 
    element: <div className="p-8"><h1 className="text-3xl font-bold">Clean Energy Page</h1></div>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
