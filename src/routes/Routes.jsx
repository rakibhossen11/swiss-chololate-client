import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../authentication/Register";
import SignIn from "../authentication/SignIn";
import Dashboard from "../layout/Dashboard";
import CreateProduct from "../pages/SellerInterface/CreateProduct/CreateProduct";
import Products from "../pages/UserInterface/Products/Products";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
           {
            path: '/',
            element: <Home></Home>,
            loader: ({params}) => fetch('http://localhost:5000/trending')
           },
           {
            path: 'register',
            element: <Register></Register>
           },
           {
            path: 'signin',
            element: <SignIn></SignIn>
           },
           {
            path: 'products',
            element: <Products></Products>
           }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'createProduct',
                element: <CreateProduct></CreateProduct>
            }
        ]
    }

])

export default routes;