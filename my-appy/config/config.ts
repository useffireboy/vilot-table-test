import { defineConfig } from '@umijs/max';
import routes from "./routes"

export default defineConfig({
  antd: {},
  dva: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: routes,
  npmClient: 'npm',
  clientLoader: {}
});

