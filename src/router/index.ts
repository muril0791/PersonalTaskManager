import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ToDoList from "../components/ToDoList.vue";
import Timer from "../components/Timer.vue";
import DrawingArea from "../components/DrawingArea.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/to-do-list",
  },
  {
    path: "/to-do-list",
    name: "ToDoList",
    component: ToDoList,
  },
  {
    path: "/timer",
    name: "Timer",
    component: Timer,
  },
  {
    path: "/drawing-area",
    name: "DrawingArea",
    component: DrawingArea,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
