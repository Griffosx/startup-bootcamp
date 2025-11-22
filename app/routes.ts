import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("what-is-a-startup", "routes/what-is-a-startup.tsx"),
] satisfies RouteConfig;
