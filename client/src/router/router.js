import { createBrowserRouter } from "react-router-dom";
import Detail from "../views/Detail";
import Main from "../views/Main";
import Update from "../views/Update";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/product/:id",
        element: <Detail />
    },
    {
        path: "/product/:id/edit",
        element: <Update />
    }
])