<template>
  <section class="section">
      <div class="title">
        <h1>User Profile</h1>
      </div>
      <div class="update-image">
        <div class="image"></div>
        <button class="button send">Upload New Photo</button>
      </div>
      <form class="form"  action="">
        <div class="div-form">
          <div class="colum-form">
            <input placeholder=" Email" class="inputs" type="text" />
            <input placeholder=" Name" class="inputs" type="text" />
            <input placeholder=" Last Name" class="inputs" type="text" />
          </div>
          <div class="colum-form">
            <input placeholder=" Password" class="inputs" type="text" />
            <input placeholder=" Confirm" class="inputs" type="text" />
          </div>
        </div>
        <button value="Send" class="button send" type="button" >Update</button>
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
.form{
  width: 100%;
}
.div-form {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 0.2rem;
}

.inputs{
  height: 2.1rem;
  border-width: 0.5px;
  width: 100%;
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
.send{
  background-color: rgb(68, 68, 68);
}

.title {
  display: flex;
  justify-content: start;
  align-content: center;
}

.colum-form {
  gap: 0.2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.update-image{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  gap: 0.3rem;
}
.image{
  width: 5rem;
  height:5rem;
  background-color: white;
}
</style>