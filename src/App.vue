<template>
  <div id="app">
    <div class="header">
      <h1>Human Resource Manager</h1>
    </div>
    <div class="nav-links">
      <router-link class="nav-link" to="/employees">Employee</router-link>
      <router-link class="nav-link" to="/tasks">Task</router-link>
      <router-link class="nav-link" to="/salaries">Salaries</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 1);
  background-image: url('https://www.10wallpaper.com/wallpaper/1366x768/1110/Aqua_Fish-3D_Creative_Design_Desktop_Wallpaper_1366x768.jpg');
  background-size: cover;
}

.header {
  margin-bottom: 20px;
  text-align: center;
  color: whitesmoke;
}

.nav-links {
  display: flex;
  gap: 80px;
}

.nav-link {
  width: 70px;
  padding: 10px;
  text-decoration: none;
  color: whitesmoke;
  background-color: black;
  border: 1px solid #97a1a8;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  display: flex;
  justify-content: center;
  font-weight: bolder;
}

.nav-link:hover {
  background-color: #97a1a8;
  color: #fff;
  transform: scale(1.05);
}

.content {
  width: 100%;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
