import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Index } from './components/Index';
import { ListPhones } from './components/ListPhones';
import { ErrorPage } from './components/ErrorPage';
import { Fetch } from './components/Fetch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/phones",
    loader: () => {
      return Fetch("/phones.json").then(data => {return data.phones});
    },
    element: <ListPhones />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/phones/:id",
    loader: ({params}) => {
      return Fetch("/phones.json").then(data => {return [data.phones[(params.id) ? params.id : 0]]});
    },
    element: <ListPhones />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
