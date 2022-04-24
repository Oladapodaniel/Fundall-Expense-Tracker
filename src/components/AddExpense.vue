<template>
  <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-end welcome-card">
    <div class="align-self-center">
      <span>Welcome back, </span><span>Oladapo</span>
      <div>Now let's get your expenses for this month</div>
    </div>
    <div class="d-none d-sm-block">
      <img src="../assets/dashboard-avatar.svg"/>
    </div>
  </div>
  <div>
   <div class="row mt-4 label">
      <div class="col-12 mb-2">Target Monthly Expenses</div>
        <div class="col-12 col-sm-9">
            <input class="input-field w-100"/>
        </div>
    </div>
   <div class="row mt-4 label">
      <div class="col-12 mb-2">Date</div>
        <div class="col-12 col-sm-9">
            <input class="input-field w-100" type="datetime-local"/>
        </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5">Today's Expenses</div>
    </div>
   <div class="row mt-4 label">
      <div class="col-12 col-sm-7 mb-2">
        <input class="input-field w-100" type="text" placeholder="Enter Item"/>
      </div>
        <div class="col-12 col-sm-5">
            <input class="input-field w-100" type="number" placeholder="Enter Amount"/>
        </div>
    </div>
   <div class="row mt-4 label">
      <div class="col-12 col-sm-7 mb-2">
        <input class="input-field w-100" type="text" placeholder="Enter Item"/>
      </div>
        <div class="col-12 col-sm-5">
            <input class="input-field w-100" type="number" placeholder="Enter Amount"/>
        </div>
    </div>
   <div class="row mt-4 label">
      <div class="col-12 col-sm-7 mb-2">
        <input class="input-field w-100" type="text" placeholder="Enter Item"/>
      </div>
        <div class="col-12 col-sm-5">
            <input class="input-field w-100" type="number" placeholder="Enter Amount"/>
        </div>
    </div>
    <div class="d-flex justify-content-end mt-4">
      <div>Total Actual Expenses: <img src="../assets/naira.svg" /> <input class="input-field gross-total"/></div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <button class="save-expense">SAVE TODAY'S EXPENSES</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddExpense',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-card {
  height: 104px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 6px;
  padding: 10px 15px;
}

.welcome-card div:first-child  span:first-child {
  font-size: 22px;
  line-height: 28px;
  color: #4DE897;
  font-weight: 800;
}

.welcome-card div:first-child  span:nth-child(2) {
  font-size: 22px;
  line-height: 28px;
  font-weight: 800;
}
.welcome-card div:first-child  div:nth-child(3) {
  font-size: 15px;
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

.gross-total {
  width: 115px;
  border: 1px solid #4DE897;
}

.save-expense {
  background: #4DE897;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 15px;
  font-weight: 700;
}
</style>
