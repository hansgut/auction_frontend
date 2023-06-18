import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import AuctionsView from "@/views/AuctionsView";
import LoginView from "@/views/LoginView";
import AuctionView from "@/views/AuctionView";
import NewAuctionView from "@/views/NewAuctionView.vue";
import UserView from "@/views/UserView.vue";
import UserUpdateView from "@/views/UserUpdateView.vue"
import UpdateAuctionView from "@/views/UpdateAuctionView.vue"
import RegisterView from "@/views/RegisterView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auctions",
    name: "auctions",
    component: AuctionsView,
  },
  {
    path: "/auctions/:id",
    component: AuctionView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/auctions/new",
    name: "newAuction",
    component: NewAuctionView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/user_update",
    name: "user_update",
    component: UserUpdateView
  },
  {
    path: "/auctions/:id/edit",
    name: "auction_update",
    component: UpdateAuctionView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
