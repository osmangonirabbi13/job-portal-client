import { createBrowserRouter } from "react-router";
import Home from "./Page/Home/Home";
import RootLayouts from "./Layout/RootLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
