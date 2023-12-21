import { createRouter, createWebHistory } from 'vue-router';
import Employee from '../components/Employee.vue';
import Task from '../components/Task.vue';
import Salary from '../components/Salary.vue';

const routes = [
  {
    path: '/employees',
    name: 'Employee',
    component: Employee,
  },
  {
    path: '/tasks',
    name: 'Task',
    component: Task,
  },
  {
    path: '/salaries',
    name: 'Salary',
    component: Salary,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
