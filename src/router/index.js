import {
  createRouter,
  createWebHistory,
} from "vue-router";
import MyMain from "@/views/MyMain.vue";
import TryComp from "@/views/TryComp.vue";
import AboutPage from "@/views/AboutPage.vue";
import MyLearnings from "@/views/MyLearnings.vue";
import MyWishlist from "@/views/MyWishlist.vue";
import NotFound from "@/views/NotFound.vue";


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
    path: "/nad",
    component: TryComp,
    meta: {
      title: "nad",
    },
    children: [
      {
        name: "MyLearnings",
        path: "My-Learnings", // Child routes are relative to "/nad"
        component: MyLearnings,
      },
      {
        name: "MyWishlist",
        path: "My-Wishlist",
        component: MyWishlist,
      },
    
    ],
  },
  {
    name: "AboutPage",
    path: "/about",
    component: AboutPage,
    meta: {
      title: "AboutPage",
    },
  },
    {
      name: "NotFound",
      path: "/:pathMathch(.*)",
      component: NotFound,
      
    },
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
