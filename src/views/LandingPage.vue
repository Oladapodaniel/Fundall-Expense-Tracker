<template>
  <div class="container-fluid container-top">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div>
          <img src="../assets/Fundall-MintGreen-Lockup.svg" />
        </div>
        <div class="d-flex">
          <router-link :to="{ name: 'Login' }" class="login-btn">
            <div>LOG IN</div>
          </router-link>
          <router-link :to="{ name: 'SignUp' }" class="sign-up">
            <div>SIGN UP</div>
          </router-link>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-100">
        <img src="../assets/avatar.svg" class="avatar" />
      </div>
      <div class="d-flex flex-column align-items-center mt-100">
        <div class="fundall-header">Fundall Expense Tracker</div>
        <div class="fundall-subheader">Mini Project Frontend</div>
      </div>
      <div class="d-flex flex-column align-items-center mt-4">
        <div class="author">by Oladapo Daniel</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  background: #fcfbfc;
  height: 100vh;
}

.login-btn {
  font-size: 18px;
  line-height: 23px;
  padding: 10px 15px;
  color: #000000;
}

.sign-up {
  background: #4ce895;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
}

.mt-100 {
  margin-top: 100px;
}

.fundall-header {
  font-size: 40px;
  font-weight: 800;
}

.fundall-subheader {
  font-size: 40px;
}

.author {
  font-size: 24px;
}

@media (max-width: 300px) {
  .avatar {
    width: 100%;
  }
}

@media (max-width: 578px) {
  .avatar {
    width: 80%;
  }

  .fundall-header {
    font-size: 30px;
    font-weight: 700;
  }

  .fundall-subheader {
    font-size: 30px;
  }
}
</style>