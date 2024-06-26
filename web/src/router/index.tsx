import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import HomeLayout from "@/layouts/HomeLayout";
import SuspenseWrapper from "@/layouts/SuspenseWrapper";
import About from "@/pages/About";
import Archived from "@/pages/Archived";
import AuthCallback from "@/pages/AuthCallback";
import Explore from "@/pages/Explore";
import Home from "@/pages/Home";
import Inboxes from "@/pages/Inboxes";
import MemoDetail from "@/pages/MemoDetail";
import NotFound from "@/pages/NotFound";
import PermissionDenied from "@/pages/PermissionDenied";
import Resources from "@/pages/Resources";
import RootRedirector from "@/pages/RootRedirector";
import Setting from "@/pages/Setting";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Timeline from "@/pages/Timeline";
import UserProfile from "@/pages/UserProfile";

export enum Routes {
  ROOT = "/",
  HOME = "/home",
  TIMELINE = "/timeline",
  RESOURCES = "/resources",
  INBOX = "/inbox",
  ARCHIVED = "/archived",
  SETTING = "/setting",
  EXPLORE = "/explore",
  ABOUT = "/about",
  AUTH = "/auth",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: Routes.AUTH,
        element: <SuspenseWrapper />,
        children: [
          {
            path: "",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "callback",
            element: <AuthCallback />,
          },
        ],
      },
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          {
            path: Routes.ROOT,
            element: <RootRedirector />,
          },
          {
            path: Routes.HOME,
            element: <Home />,
          },
          {
            path: Routes.TIMELINE,
            element: <Timeline />,
          },
          {
            path: Routes.RESOURCES,
            element: <Resources />,
          },
          {
            path: Routes.INBOX,
            element: <Inboxes />,
          },
          {
            path: Routes.ARCHIVED,
            element: <Archived />,
          },
          {
            path: Routes.SETTING,
            element: <Setting />,
          },
          {
            path: Routes.EXPLORE,
            element: <Explore />,
          },
          {
            path: "m/:uid",
            element: <MemoDetail />,
          },
          {
            path: "u/:username",
            element: <UserProfile />,
          },
          {
            path: Routes.ABOUT,
            element: <About />,
          },
          {
            path: "403",
            element: <PermissionDenied />,
          },
          {
            path: "404",
            element: <NotFound />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

export default router;
