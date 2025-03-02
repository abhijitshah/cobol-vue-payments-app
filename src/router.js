import { createRouter, createWebHistory } from 'vue-router';
import MainMenu from './components/MainMenu.vue';
import ViewBalance from './components/ViewBalance.vue';
import CreditAccount from './components/CreditAccount.vue';
import DebitAccount from './components/DebitAccount.vue';
import ExitComponent from './components/Exit.vue';

const routes = [
  { path: '/', name: 'main-menu', component: MainMenu },
  { path: '/view-balance', name: 'view-balance', component: ViewBalance },
  { path: '/credit-account', name: 'credit-account', component: CreditAccount },
  { path: '/debit-account', name: 'debit-account', component: DebitAccount },
  { path: '/exit', name: 'exit', component: ExitComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;