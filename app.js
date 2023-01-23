const routes = [
  { path: "/", component: HomeView },
  { path: "/projeto", component: ProjetoView },
  { path: "/n1edicoes", component: N1EdicoesView },
  {
    path: "/video/:id",
    name: "video",
    component: VideoView,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = Vue.createApp({});
app.use(router);
app.mount("#app");
