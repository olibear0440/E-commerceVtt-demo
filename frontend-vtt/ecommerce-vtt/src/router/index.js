import { createRouter, createWebHashHistory } from "vue-router";
import Products from "../views/Products-page.vue";
import Product from "../views/Product-page.vue";
import Cart from "../views/Cart-page.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  {
    path: "/products",
    name: "productsPage",
    component: Products,
  },
  {
    path: "/products/:id",
    name: "productPage",
    component: Product,
  },

  {
    path: "/cart",
    name: "CartPage",
    component: Cart,
  },
  {
    path: "/",
    redirect: "/products",
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
