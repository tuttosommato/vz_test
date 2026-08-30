import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import WorkPage from "@/pages/WorkPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ErrorPage from "@/pages/ErrorPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <WorkPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  // Vite serves the app under BASE_URL (e.g. "/vz_test/" on GitHub Pages) —
  // the router needs to know that prefix to match routes correctly.
  { basename: import.meta.env.BASE_URL },
);
