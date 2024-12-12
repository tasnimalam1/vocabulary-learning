import 'animate.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import './index.css';
import router from './routes/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
