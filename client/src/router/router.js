import { createBrowserRouter } from "react-router-dom";
import Detail from "../views/Detail";
import Main from "../views/Main";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/product/:id",
        element: <Detail />
    }
])