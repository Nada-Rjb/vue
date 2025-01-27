import { createRouter, createWebHashHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import TryComp from "@/views/TryComp.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes = [
  {
    name: "MyMain",
    path: "/",
    component: MyMain,
  },
  {
    name: "try",
    path:'/nad',
    component: TryComp,
  },
  {
    name: "AboutPage",
    path: "/about",
    component: AboutPage,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
