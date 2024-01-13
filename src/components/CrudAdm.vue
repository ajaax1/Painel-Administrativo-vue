<template>
  <section>
    <div class="section title-button">
      <h1>Administrador</h1>
      <button @click="showInputs()" class="button add">{{ showButtonText }}</button>
    </div>
    <form v-show="firstSectionShow" class="section inputs">
      <label for="">Email</label>
      <input placeholder=" ..." type="text" />
      <label for="">First Name</label>
      <input placeholder=" ..." type="text" />
      <label for="">Last Name</label>
      <input placeholder=" ..." type="text" />
      <label for="">Password</label>
      <input placeholder=" ..." type="text" />
      <label for="">Confirm Password</label>
      <input placeholder=" ..." type="text" />
      <label for="">Profile Picture</label>
      <input placeholder="Image" type="file" accept="image/*" />
      <button class="button send">Send</button>
    </form>
    <div v-show="secondSectionShow" class="section table">
      <form class="search-button">
        <input class="input-search" placeholder=" Search" type="search" />
        <button type="button" class="button search" value="Send">Search</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Create by</th>
              <th>Creation Date</th>
              <th>Options</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button class="button update"><a href="">Update</a></button>
              </td>
              <td>
                <button class="button delete"><a href="">Delete</a></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstSectionShow: false,
      secondSectionShow: true,
      showButtonText: "Add Admin",
    };
  },
  methods: {
    showInputs() {
      if (this.firstSectionShow == false) {
        this.firstSectionShow = true;
        this.secondSectionShow = false;
        this.showButtonText = "Show Table";
      } else {
        this.showButtonText = "Add Admin";
        this.firstSectionShow = false;
        this.secondSectionShow = true;
      }
    },
  },
};
</script>

<style scoped>
.table {
  background: #2e3248;
  border-radius: 0.3rem;
  padding: 1rem;
  text-decoration: none;
  overflow: scroll;
  overflow-x: scroll;
  overflow-y: hidden;
}
.inputs {
  background: #2e3248;
  border-radius: 1rem;
  padding: 1rem;
  border-radius: 0.3rem;
  width: 100%;
  text-decoration: none;
}

.inputs input {
  width: 100%;
  height: 2rem;
  margin-bottom: 0.5rem;
}

.inputs input[type="button"] {
  width: 5rem;
  height: 2rem;
  border-radius: 0.3rem;
}

.inputs input[type="text"] {
  border-radius: 0.3rem;
  height: 2rem;
  border-style: none;
}

h1 {
  font-size: 1.5rem;
  color: rgb(177, 170, 196);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: rgb(177, 170, 196);
  border-radius: 0.3rem;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #24283b;
}

.section {
  background: #2e3248;
  border-radius: 0.5rem;
  width: 100%;
}
.title-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem;
}
.search-button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.input-search{
  height: 2.1rem;
  border-width: 0.5px;
  width: 15rem;
  border-radius: 0.3rem;
}
.button{
  border-color: rgb(177, 170, 196);
  color: rgb(177, 170, 196) ;
  height: 2rem;
  border-width: 0.5px;
  border-radius: 0.3rem;
  text-align: center;
  padding: 0.2rem;
}
.update{
  background-color: rgb(0, 1, 51);
}
.delete{
  background-color: rgb(80, 0, 0);
}
.add{
  background-color: rgb(41, 41, 41);
}
.send{
  background-color: rgb(68, 68, 68);
  width: 5rem;
}
.search{
  background-color: rgb(68, 68, 68);
  width: 4rem;
}

@media only screen and (max-width: 1000px) {
  .title h1{
    font-size: 1.5rem;
  }
  .title-button{
    flex-wrap: wrap;
  }
}
</style>


