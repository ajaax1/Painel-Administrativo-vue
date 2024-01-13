<template>
  <div class="header">
    <span id="menu"  @click="toggleIcon()" class="material-symbols-outlined"> menu </span>
    <ul>
      <li>
        <div class="image-name">
          <span class="material-symbols-outlined"> notifications </span>
          <h1>Name</h1>
          <div class="image"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  inject: ["eventBus"],
    methods:{
      toggleIcon() {
        this.eventBus.emit("trigger");
      }
    }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #2e3248;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}
ul {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: black;
  list-style-type: none;
  height: 100%;
  font-size: 0.5rem;
  color: white;
}
.image {
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: aliceblue;
}
.image-name {
  display: flex;
  gap: 1rem;
  align-items: center;
}
#menu{
  display: none;
}
@media only screen and (max-width: 1000px) {
  #menu{
    display: block;
  }
}

</style>