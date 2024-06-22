import { createRouter, createWebHistory } from "vue-router";
import Pelamar from "../components/Pelamar.vue";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pelamar",
    name: "Pelamar",
    component: Pelamar,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
