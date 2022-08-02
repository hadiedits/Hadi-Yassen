import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@//views/HomeView.vue";
import _3DVdeos from "@//views/3D-Vdeos.vue";
import CustomerVdeos from "@//views/Customer-Vdeos.vue";
import PrivateVideos from "@//views/Private-Videos.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/3D-Vdeos",
    name: "3D-Vdeos",
    component: _3DVdeos,
  },
  {
    path: "/Customer-Vdeos",
    name: "/Customer-Vdeos",
    component: CustomerVdeos,
  },
  {
    path: "/Private-Videos",
    name: "Private-Videos",
    component: PrivateVideos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
