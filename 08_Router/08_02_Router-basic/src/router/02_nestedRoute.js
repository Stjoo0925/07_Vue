import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/views/01_Router/HomeView.vue";
import NestedHome from "@/views/02_NestedRouter.vue/NestedHome.vue";
import NestedView from "@/views/02_NestedRouter.vue/NestedView.vue";
import HiddenView from "@/views/02_NestedRouter.vue/HiddenView.vue";
import RootRouter from "@/views/02_NestedRouter.vue/RootRouter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/nested",
      name: "Nested",
      component: RootRouter,
      children: [
        {
          path: "",
          component: NestedHome,
        },
        {
          path: "view",
          component: NestedView,
        },
        {
          path: "hidden",
          name: "Hidden",
          component: HiddenView,
        }
      ]
    }
  ]
});

export default router;

