import { createBrowserRouter } from "react-router";
import Home from "./Page/Home/Home";
import RootLayouts from "./Layout/RootLayouts";
import Register from "./Page/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
