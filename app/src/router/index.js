import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/:alias",
      name: "characterItem",
      component: () => import("@/views/CharacterItemView.vue"),
    },
    {
      path: "/404",
      name: "notFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
