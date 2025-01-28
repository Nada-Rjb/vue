import {
  createRouter,
  createWebHistory,
} from "vue-router";
import MyMain from "@/views/MyMain.vue";
import TryComp from "@/views/TryComp.vue";
import AboutPage from "@/views/AboutPage.vue";


const routes = [
  {
    name: "MyMain",
    path: "/",
    component: MyMain,
    meta: {
      title: "MyMain",
    },
  },
  {
    name: "try",
    path: "/nad/:userid",
    component: TryComp,
    meta: {
      title: "nad",
    },
  },
  {
    name: "AboutPage",
    path: "/about",
    component: AboutPage,
    meta: {
      title: "AboutPage",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
