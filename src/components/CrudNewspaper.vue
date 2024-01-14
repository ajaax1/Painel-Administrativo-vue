<template>
  <section>
    <div class="section title-button">
      <h1>Newspaper</h1>
      <button @click="showInputs()" class="button add">{{ showButtonText }}</button>
    </div>
    <form v-show="firstSectionShow" class="section inputs">
      <label>Title
        <input placeholder=" ..." type="text" />
      </label>
      <label>Paragraph 1
        <textarea placeholder="..." maxlength="100" rows="4"></textarea>
      </label>
      <label>Paragraph 2
        <textarea placeholder="..." maxlength="100" rows="4"></textarea>
      </label>
      <label>Paragraph 3
        <textarea placeholder="..." maxlength="100" rows="4"></textarea>
      </label>
      <label>Paragraph 4
        <textarea placeholder="..." maxlength="100" rows="4"></textarea>
      </label>
      <label>Paragraph 5
        <textarea placeholder="..." maxlength="100" rows="4"></textarea>
      </label>
      <label>Paragraph 6
        <textarea placeholder="..." maxlength="100" rows="4"></textarea>
      </label>
      <input placeholder="Image" type="file" accept="image/*" />
      <button type="button send" class="button send">Send</button>
    </form>
    <div class="section table" v-show="secondSectionShow">
      <form class="search-button">
        <input class="input-search" placeholder=" Search" type="search" />
        <button type="button" class="button search">Search</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Paragraphs1</th>
              <th>Paragraphs2</th>
              <th>Paragraphs3</th>
              <th>Paragraphs4</th>
              <th>Paragraphs5</th>
              <th>Paragraphs6</th>
              <th>Image</th>
              <th>Date</th>
              <th>Hour</th>
              <th>Creator</th>
              <th>Option</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>US imposes sanctions over...</td>
              <td>US-imposes-sanctions-over</td>
              <td>The United States has imposed...</td>
              <td>The move comes after Washington and its allies...</td>
              <td></td>
              <td></td>
              <td></td>
              <td>./assets</td>
              <td>21/07/2004</td>
              <td>13:00</td>
              <td>Joao</td>
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
      showButtonText: "Add Article",
    };
  },
  methods: {
    showInputs() {
      if (this.firstSectionShow == false) {
        this.firstSectionShow = true;
        this.secondSectionShow = false;
        this.showButtonText = "Show Table";
      } else {
        this.showButtonText = "Add Article";
        this.firstSectionShow = false;
        this.secondSectionShow = true;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  color: rgb(177, 170, 196);
}

.section {
  background: #2e3248;
  border-radius: 0.5rem;
}

table {
  border-collapse: collapse;
  margin-top: 20px;
  color: rgb(177, 170, 196);
}

.table {
  background: #2e3248;
  border-radius: 0.3rem;
  padding: 1rem;
  text-decoration: none;
  overflow-x: scroll;
  overflow-y: hidden;
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

.title-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.button {
  color: rgb(177, 170, 196);
  height: 2rem;
  border-radius: 0.3rem;
  text-align: center;
  padding: 0.2rem;
  border-style: none;
  background-color: #6059c0;
}

.update {
  background-color: rgb(0, 1, 51);
}

.delete {
  background-color: rgb(80, 0, 0);
}

.send {
  background-color: rgb(70, 70, 70);
  width: 7rem;
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
  background: #2e3248;
  height: 2.1rem;
  border-width: 0.1rem;
  width: 100%;
  border-style: solid;
  border-color: rgb(177, 170, 196);
  border-radius: 0.3rem
}

.inputs textarea {
  background: #2e3248;
  min-height: 4rem;
  max-height: 6rem;
  max-width: 100%;
  min-width: 100%;
  border-width: 0.1rem;
  width: 100%;
  border-style: solid;
  border-color: rgb(177, 170, 196);
  border-radius: 0.3rem
}

.search-button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.input-search {
  height: 2.1rem;
  border-width: 0.5px;
  width: 15rem;
  border-radius: 0.3rem;
}

@media only screen and (max-width: 1000px) {
  .title h1 {
    font-size: 1.5rem;
  }

  .title-button {
    flex-wrap: wrap;
  }
}
</style>