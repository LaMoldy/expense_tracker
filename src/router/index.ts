import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTransactionViewVue from '../views/AddTransactionView.vue';
import ViewTransactionsViewVue from '../views/ViewTransactionsView.vue';
import SettingsViewVue from '../views/SettingsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/add/transactions',
    name: 'Add Transaction',
    component: AddTransactionViewVue,
  },
  {
    path: '/view/transactions',
    name: 'View Transaction',
    component: ViewTransactionsViewVue,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsViewVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
