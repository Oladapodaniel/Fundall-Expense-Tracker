<template>
  <div class="container-fluid">
      <div class="d-flex justify-content-between">
        <div>
            <img src="../assets/Fundall-MintGreen-Lockup.svg"/>
        </div>
      </div>
      <div class="row align-items-center">
          <div class="col-md-6">
            <div class="d-flex flex-column align-items-center">
                <img src="../assets/avatar.svg" />
                <div class="text-center mt-5">
                    <span class="welcome-back">Welcome! </span>
                    <span class=" miss-you">Let's get to know you.</span>
                </div>
                <div class="font-21 mt-4 text-center">
                    Your first step towards a better financial lifestyle starts here.
                </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 col-xl-4 card-bg mt-4 mt-md-0">
              <form>
                <div class="row label">
                    <div class="col-sm-6">
                        <div>First Name</div>
                        <input class="input-field w-100 mt-2" placeholder="Enter First Name"/>
                    </div>
                    <div class="col-sm-6 mt-4 mt-sm-0">
                        <div>Last Name</div>
                        <input class="input-field w-100 mt-2" placeholder="Enter Last Name"/>
                    </div>
                </div>
                <div class="row mt-4 label">
                    <div class="col-12 mb-2">Email address</div>
                    <div class="col-12">
                        <input class="input-field w-100" placeholder="Enter Email"/>
                    </div>
                </div>
                <div class="row mt-4 label">
                    <div class="col-12 mb-2">Password</div>
                    <div class="col-12">
                        <input class="input-field w-100" placeholder="Enter password"/>
                    </div>
                </div>
                <div class="row mt-4 label">
                    <div class="col-12 mb-2">Confirm password</div>
                    <div class="col-12">
                        <input class="input-field w-100" placeholder="Confirm password"/>
                    </div>
                    <div class="col-12 ">
                        <button class="signup-btn w-100">SIGN UP</button>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 text-center">
                        <span>Already have an account? </span>
                        <span class="register-color">Login here</span>
                    </div>
                </div>
              </form>
          </div>
          <div class="col-6"></div>
          <div class="col-md-6 col-lg-5 col-xl-4 my-3">
              <div class="col-12 text-center mt-3 click-link">
                <span>By clicking on this Login, you agree to our </span>
                <span>Terms &amp; Conditions and Privacy Policy</span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .container-fluid{
     /* border: 2px solid red; */
     background: #FCFBFC;
     padding: 30px 70px;
     height: 100vh
     /* padding-left: 70px; */
 }

 .card-bg {
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
    border-radius: 6px;
    padding: 60px;
 }

 /* .holla div:first-child {
     font-size: 34px;
     font-weight: 500
 }

 .holla div:last-child {
     font-size: 20px
 } */

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

 .signup-btn {
    background: #4DE897;
    box-shadow: 0px 4px 10px rgba(118, 212, 45, 0.3);
    border-radius: 3px;
    border: none;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 30px
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

 input::-webkit-input-placeholder {/* Chrome/Opera/Safari/Edge */
	font-style: italic;
    color: #c4c5c3
}

input::-ms-input-placeholder { /* Microsoft Edge */
    font-style: italic;
    color: #c4c5c3
}

input:-ms-input-placeholder {/* IE 10+ */
	font-style: italic;
    color: #c4c5c3
}

.font-21 {
    font-size: 21px;
}

 @media (max-width: 578px) {
     .card-bg {
         padding: 30px;
     }

     .container-fluid {
         padding: 30px 30px;
     }
 }


</style>