import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Stylesheets
import './App.css';
// React Components
import { RootLayout } from './components/layout/RootLayout';
import { HeroSection } from './pages/HeroSection'
import { About } from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/', element: <HeroSection />
      }, 
      {
        path:'/about', element: <About/>
      }
    ]
  }
])
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
