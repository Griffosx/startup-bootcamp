import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("what-is-a-startup", "routes/what-is-a-startup.tsx"),
  route("mission-vision-values", "routes/mission-vision-values.tsx"),
  route("building-and-validating", "routes/building-and-validating.tsx"),
  route("funding-stages", "routes/funding-stages.tsx"),
  route(
    "italian-investment-environment",
    "routes/italian-investment-environment.tsx",
  ),
  route("go-to-market-strategy", "routes/go-to-market-strategy.tsx"),
] satisfies RouteConfig;
