import { lazy } from "react";
import { Home } from "../routes/Home/Home";

interface RouteConfig {
  path: string;
  element: JSX.Element;
}


export const AppRouteConfig = {
  public: [
    {path: "/", element: <Home/>},
  ],
  protected: [],
  admin: [] as RouteConfig[],
} as const;
