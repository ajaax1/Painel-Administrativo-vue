<template>
  <div class="side-navigation" :class="{ 'show': useClass }">
    <div class="logo-text">
      <span class="material-symbols-outlined logo">
        local_fire_department
      </span>
      <h1>Painel</h1>
      <span id="icon-close" @click="showSideBar()" class="material-symbols-outlined">
        close
      </span>
    </div>
    <router-link to="/" class="side-button" :class="{ 'active': currentRoute === '/' }">
      <div class="text-icon">
        <span class="material-symbols-outlined"> account_circle </span>
        <h3>User Profile</h3>
      </div>
    </router-link>
    <div @click="toggleVisibility" class="side-button">
      <div class="text-icon">
        <span class="material-symbols-outlined"> dataset </span>
        <h3>Cruds</h3>
      </div>
      <span class="material-symbols-outlined"> {{ textSpan }} </span>
    </div>
    <ul v-show="isVisible" class="ul-option">
      <li :class="{ 'active': currentRoute === '/CrudAdm' }">
        <router-link  style="width: 100%;" to="/CrudAdm">
          <span class="material-symbols-outlined"> radio_button_unchecked </span>
          Administrators
        </router-link>
      </li>
      <li id="select" :class="{ 'active': currentRoute === '/CrudNewsPaper' }">
        <router-link style="width: 100%;" to="/CrudNewsPaper">
          <span class="material-symbols-outlined"> radio_button_unchecked </span>
          Newspaper
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNavigation",
  inject: ["eventBus"],
  data() {
    return {
      currentRoute: this.$route.path,
      useClass: false,
      isVisible: false,
      textSpan: "chevron_right",
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
      this.textSpan =
        this.textSpan === "chevron_right" ? "expand_more" : "chevron_right";
    },
    showSideBar() {
      if (this.useClass === true) {
        this.useClass = false
      } else {
        this.useClass = true
      }
    },
  },
  mounted() {
    this.eventBus.on("trigger", () => {
      this.showSideBar();
    });
  },
  watch: {
    '$route'(to, from) {
      this.currentRoute = to.path;
    }
  }
}
</script>

<style scoped>
.side-navigation {
  border-top-right-radius: 0.5rem;
  background: #2e3248;
  color: rgb(177, 170, 196);
  padding: 0.5rem;
  min-height: 100%;
  width: 20% !important;
}

.side-button {
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #373b51;
  padding: 0.3rem;
  border-radius: 0.5rem;
  margin-bottom: 0.1rem;
  cursor: pointer;
}

.ul-option {
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}

li {
  list-style-type: none;
  width: 90%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: first baseline;
  padding: 0.2rem;
  margin-bottom: 1px;
  gap: 0.5rem;
  cursor: pointer;
}

li span {
  font-size: small;
}

li:hover {
  background-color: #6059c0;
}

.logo-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  height: 4rem;
}

.logo {
  animation: changeColor 4s infinite;
}

.text-icon {
  height: 100%;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.show {
  display: block !important;
}

.active {
  background-color: #6059c0;
}

@keyframes changeColor {

  0%,
  100% {
    color: rgb(185, 0, 0);
  }

  25% {
    color: rgb(226, 17, 17);
  }

  50% {
    color: rgb(218, 27, 27);
  }

  75% {
    color: rgb(131, 25, 25);
  }
}

@media only screen and (min-width: 1000px) {
  #icon-close {
    display: none;
  }
}

@media only screen and (max-width: 1000px) {
  .side-navigation {
    display: none;
    position: absolute;
    width: 30dvw !important;
    left: 0;
  }
}

@media only screen and (max-width: 650px) {
  .side-navigation {
    width: 50dvw !important;
  }
}

@media only screen and (max-width: 400px) {
  .side-navigation {
    width: 65dvw !important;
  }
}

@media only screen and (max-width: 300px) {
  .side-navigation {
    width: 90dvw !important;
  }
}
</style>