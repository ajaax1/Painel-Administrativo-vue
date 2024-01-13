<script setup>
import TheHeader from "./components/TheHeader.vue";
import SideNavigation from "./components/SideNavigation.vue";
import UserProfile from "./components/UserProfile.vue";
import CrudAdm from "./components/CrudAdm.vue";
import CrudNewspaper from "./components/CrudNewspaper.vue";
</script>

<template>
  <div class="screen">
    <SideNavigation/>
    <div class="content">
      <TheHeader/>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

</style>
