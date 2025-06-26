import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { FeedbackPage } from './pages/FeedbackPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutMePage from './pages/AboutMePage.jsx'
import Home from './pages/Home.jsx'
import Exhibition2005Page from './pages/Exhibition2005Page.jsx'
import EnteriorsPage from './pages/EnteriorsPage.jsx'
import Exhibition2006Page from './pages/Exhibition2006Page.jsx'
import Paintings2007Page from './pages/Paintings2007Page.jsx'
import ContactMePage from './pages/ContactMePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-me', element: <AboutMePage /> },
      { path: '2005', element: <Exhibition2005Page /> },
      { path: '2006', element: <Exhibition2006Page /> },
      { path: '2007', element: <Paintings2007Page /> },
      { path: 'feedback', element: <FeedbackPage /> },
      { path: 'enteriors', element: <EnteriorsPage /> },
      { path: 'contact', element: <ContactMePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
], {
  basename: '/Lisa-Borger' 
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
