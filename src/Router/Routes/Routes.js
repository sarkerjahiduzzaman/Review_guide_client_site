import { createBrowserRouter } from "react-router-dom";
import AllReviews from "../../AllReviews/AllReviews";
import AddService from "../../pages/AddService/AddService";
import AllServices from "../../pages/AllServices/AllServices";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Main from "../../pages/layout/Main";
import Login from "../../pages/Login/Login";
import Reviews from "../../pages/Reviews/Reviews";
import SignUp from "../../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/allreviews',
          element: <AllReviews></AllReviews>
        },
        {
          path: '/addedservice',
          element: <AddService></AddService>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/services',
          element: <AllServices></AllServices>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/review/:id',
          element: <Reviews></Reviews>,
          loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
        }
      ]
    },
  ]);

  export default router;