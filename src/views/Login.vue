<template>
  <div class="container-fluid container-top">
      <div class="container">
          <div class="d-flex justify-content-between">
            <div>
                <img src="../assets/Fundall-MintGreen-Lockup.svg"/>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="d-flex flex-column align-items-center">
                    <img src="../assets/avatar-login.svg" />
                    <div class="welcome-back mt-3">Welcome back!</div>
                    <div class=" miss-you">We miss you.</div>
                </div>
            </div>
            <div class="col-md-6 col-lg-5 card-bg mt-4 mt-md-0">
                <form @submit.prevent="loginUser">
                    <div class="row holla">
                        <div class="col-12">Holla</div>
                        <div class="col-12">Sign in to the vibe</div>
                    </div>
                    <div class="row label">
                        <div class="col-12 mb-2">Email or Username</div>
                        <div class="col-12">
                            <input type="email" class="input-field w-100" placeholder="Enter email" autocomplete="email" v-model="userDetails.email"/>
                        </div>
                    </div>
                    <div class="row mt-4 label">
                        <div class="col-12 mb-2">Password</div>
                        <div class="col-12">
                            <input type="password" class="input-field w-100" placeholder="Enter password" autocomplete="new-password" v-model="userDetails.password"/>
                        </div>
                        <div class="col-12 label">
                            <button class="login-btn w-100 c-pointer">LOGIN</button>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12 text-center">
                            <span>Don't have an account? </span>
                            <router-link :to="{ name: 'SignUp' }" class="style-routerlink">
                                <span class="register-color">Register here</span>
                            </router-link>
                        </div>
                        <div class="col-12 text-center mt-3 click-link">
                            <span>By clicking on this login, you agree to our </span>
                            <span>Terms &amp; Conditions and Privacy Policy</span>
                        </div>
                    </div>

                </form>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from '@/gateway/backendapi'
import router from '@/router/index'
export default {
    setup () {
        const userDetails = reactive({})

        const loginUser = async () => {
            try {
                let { data } = await axios.post('/api/v1/login', userDetails)
                console.log(data)
                // Save token to local storage
                localStorage.setItem('token', data.success.user.access_token)
                router.push( { name: 'Dashboard' } )
            }
            catch (err) {
                console.log(err)
            }
        }

        return {
            userDetails,
            loginUser
        }
    }
}
</script>

<style scoped>

  .container-fluid{
     /* border: 2px solid red; */
     background: #FCFBFC;
     /* padding: 30px 70px; */
     height: 100vh
     /* padding-left: 70px; */
 }

 .card-bg {
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
    border-radius: 6px;
    padding: 60px;
 }

 .holla div:first-child {
     font-size: 34px;
     font-weight: 500
 }

 .holla div:last-child {
     font-size: 20px
 }

 .label {
     margin-top: 60px
 }

 .label div:first-child {
    font-size: 16px;
    color: #30443C;
 }

 .input-field {
    background: #FFFFFF;
    border: 1px solid #CAD0C9;;
    border-radius: 4px;
    padding: 8px 17px
 }

.input-field:focus {
    background: #FFFFFF;
    border: 1px solid #4DE897;
    outline: none;
    border-radius: 4px;
    padding: 8px 17px
 }

 .login-btn {
    background: #4DE897;
    box-shadow: 0px 4px 10px rgba(118, 212, 45, 0.3);
    border-radius: 3px;
    border: none;
    padding: 15px;
    font-size: 16px;
    font-weight: 600
 }

 .register-color, .click-link span:last-child, .welcome-back {
     color: #4DE897
 }

 .click-link span:first-child {
     color: #989d96
 }

 .welcome-back, .miss-you {
    font-size: 40px;
    font-weight: 800;
 }


.style-routerlink, .style-routerlink:hover {
    text-decoration: none;
}

 @media (max-width: 578px) {
     .card-bg {
         padding: 30px;
     }

     /* .container-fluid {
         padding: 30px 30px;
     } */
 }


</style>