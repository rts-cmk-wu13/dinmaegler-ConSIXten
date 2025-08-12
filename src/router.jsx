import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Favoritter from "./pages/Favoritter";
import Mæglere from "./pages/Mæglere";
import Contact from "./pages/Contact";
import Boliger from "./pages/Boliger";
import NotFound from "./pages/NotFound";
import Loading from "./Components/Loading";
import { ErrorBoundary } from "./Components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "boliger",
                element: <Boliger />
            },
             {
                path: "mæglere",
                element: <Mæglere />
            },
             {
                path: "favoritter",
                element: <Favoritter />
            },
             {
                path: "contact",
                element: <Contact />
            },
            {   
                path: "*",  
                element: <NotFound />
            } 
        ]
    }

]);
export default router;