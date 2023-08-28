import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


import Home from "./pages/Home";
import App from "./app";
import ErrorPage from "./pages/ErrorPage";
import Myprojects from "./pages/Myprojects";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />);