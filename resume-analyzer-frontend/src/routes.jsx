import { createBrowserRouter } from "react-router";
import Layout from "./resume-analyzer/Layout";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/resume-analyzer',
        element: <Layout />
    }

])

export default router;