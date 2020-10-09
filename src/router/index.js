import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Panel",
    component: () => import('@/views/Panel'),
    redirect: '/nav',
    children: [
      {
        path: 'nav',
        component: () => import('@/components/Nav'),
        name: 'Nav'
      },
      {
        path: 'echarts',
        component: () => import('@/components/Echarts'),
        name: 'Echarts'
      },
      {
        path: 'aMap',
        component: () => import('@/components/AMap'),
        name: 'AMap'
      },
      {
        path: 'pickMe',
        component: () => import('@/components/PickMe'),
        name: 'PickMe'
      },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
