import {lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Loader from "../shared/ui/Loader/Loader.tsx";

const NotFound = lazy(() => import("./NotFound/NotFound.tsx"));

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound/>
    }
])

const Routing = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <RouterProvider router={router}/>
        </Suspense>
    );
};

export default Routing;