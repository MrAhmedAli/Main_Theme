import { createRouter, createWebHistory } from 'vue-router';
import header from "@/viewes/HeaderPage.vue"
import MainBannerPage from "@/viewes/MainBannerPage.vue"
import order from "@/viewes/OrderWayPage.vue"
import FirstAd from "@/viewes/FirstAdPage.vue"
import products from "@/viewes/ProductsPage.vue"
import SecondBannerPage from "@/viewes/SecondBannerPage.vue"
import HotSales from "@/viewes/HotSalesPage.vue"
import ThirdBannerPage from "@/viewes/ThirdBannerPage.vue"
import Reviews from "@/viewes/ReviewsPage.vue"
import footer from "@/viewes/FooterPage.vue"




const routes = [
    {
        path:"/",
        redirect:"/header"

    },
    {
        path:"/header",
        name: "header",
        component: header,
    },
    {
        path:"/main-banner",
        name: "main-banner",
        component: MainBannerPage,
    },
    {
        path:"/order",
        name: "order",
        component: order,
    },
    {
        path:"/first-Ad",
        name: "first-Ad",
        component: FirstAd,
    },
    {
        path:"/products",
        name: "products",
        component: products,
    },
    {
        path:"/second-banner",
        name: "second-banner",
        component: SecondBannerPage,
    },
    {
        path:"/hot-sales",
        name: "hot-sales",
        component: HotSales,
    },
    {
        path:"/third-banner",
        name: "third-banner",
        component: ThirdBannerPage,
    },
    {
        path:"/Reviews",
        name: "Reviews",
        component: Reviews,
    },
    {
        path:"/footer",
        name: "footer",
        component: footer,
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  redirect: "/",
});

export default router;