import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("getting-started", "routes/getting-started.tsx"),
  route("resources", "routes/resources.tsx"),
  route("funding", "routes/funding.tsx"),
  route("legal", "routes/legal.tsx"),
  route("community", "routes/community.tsx"),
] satisfies RouteConfig;
