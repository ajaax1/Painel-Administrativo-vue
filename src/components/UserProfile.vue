<template>
  <section class="section">
    <div class="title">
      <h1>User Profile</h1>
    </div>
    <div class="update-image">
      <div class="image"></div>
      <div>
        <button class="button send">Upload New Photo</button>
        <h4>Allowed JPG, GIF or PNG. Max size of 800K</h4>
      </div>
    </div>
    <form class="form" action="">
      <div class="div-form">
        <div class="colum-form">
          <label> Email
            <input placeholder=" Email" class="inputs" type="text" />
          </label>
          <label> Name
            <input placeholder=" Name" class="inputs" type="text" />
          </label>
          <label>Last Name
            <input placeholder=" Last Name" class="inputs" type="text" />
          </label>
        </div>
        <div class="colum-form">
          <label>Password
            <input placeholder=" Password" class="inputs" type="text" />
          </label>
          <label>Confirm
            <input placeholder=" Confirm" class="inputs" type="text" />
          </label>
        </div>
      </div>
      <button value="Send" class="button send" type="button">Update</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserProfile",
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: rgb(177, 170, 196);
}

.section {
  background: #2e3248;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
}

.form {
  width: 100%;
}

.div-form {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.inputs {
  background: #2e3248;
  height: 2.1rem;
  border-width: 0.1rem;
  width: 100%;
  border-style: solid;
  border-color: rgb(177, 170, 196);
  border-radius: 0.3rem
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

.title {
  display: flex;
  justify-content: start;
  align-content: center;
}

.colum-form {
  gap: 0.5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
}

.update-image {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  gap: 0.3rem;
}

.image {
  width: 5rem;
  height: 5rem;
  background-color: white;
}
</style>