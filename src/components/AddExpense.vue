<template>
  <div
    class="
      d-flex
      flex-column flex-sm-row
      justify-content-sm-between
      align-items-sm-end
      welcome-card
    "
  >
    <div class="align-self-center">
      <span>Welcome back, </span><span>{{ userProfile.firstname }}</span>
      <div>Now let's get your expenses for this month</div>
    </div>
    <div class="d-none d-sm-block">
      <img src="../assets/dashboard-avatar.svg" />
    </div>
  </div>
  <div>
    <div class="row mt-4 label">
      <div class="col-12 mb-2">Target Monthly Expenses</div>
      <div class="col-12 col-sm-9">
        <input type="text" v-model="totalTarget" class="input-field w-100" @input="updateTotalTarget" />
      </div>
    </div>
    <div class="row mt-4 label">
      <div class="col-12 mb-2">Date</div>
      <div class="col-12 col-sm-9">
        <input class="input-field w-100" type="date" @change="setExpenseDate" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5">Today's Expenses</div>
    </div>
    <div class="row mt-4 label">
      <div class="col-12 col-sm-7 mb-2">
        <input
          class="input-field w-100"
          type="text"
          placeholder="Enter Item"
          v-model="firstData.item"
        />
      </div>
      <div class="col-12 col-sm-5">
        <input
          class="input-field w-100"
          type="number"
          placeholder="Enter Amount"
          v-model="firstData.amount"
          @input="addAmount"
        />
      </div>
    </div>
    <div class="row mt-4 label">
      <div class="col-12 col-sm-7 mb-2">
        <input
          class="input-field w-100"
          type="text"
          placeholder="Enter Item"
          v-model="secondData.item"
        />
      </div>
      <div class="col-12 col-sm-5">
        <input
          class="input-field w-100"
          type="number"
          placeholder="Enter Amount"
          v-model="secondData.amount"
          @input="addAmount"
        />
      </div>
    </div>
    <div class="row mt-4 label">
      <div class="col-12 col-sm-7 mb-2">
        <input
          class="input-field w-100"
          type="text"
          placeholder="Enter Item"
          v-model="thirdData.item"
        />
      </div>
      <div class="col-12 col-sm-5">
        <input
          class="input-field w-100"
          type="number"
          placeholder="Enter Amount"
          v-model="thirdData.amount"
          @input="addAmount"
        />
      </div>
    </div>
    <div class="d-flex justify-content-end mt-4">
      <div>
        Total Actual Expenses: <img src="../assets/naira.svg" />
        <input
          class="input-field gross-total"
          type="text"
          v-model="totalAmount"
        />
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <button class="save-expense" :class="{ 'c-pointer' : !disabled, 'c-not-allowed' : disabled }" @click="saveExpenditureData" :disabled="disabled">
        SAVE TODAY'S EXPENSES
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
export default {
  name: "AddExpense",
  props: ["userProfile", "disabled"],
  emits: ["summedExpense"],
  setup(props, { emit }) {
    const totalTarget = ref("");
    let firstData = reactive({ amount: 0 });
    let secondData = reactive({ amount: 0 });
    let thirdData = reactive({ amount: 0 });
    const allExpenditure = ref([]);
    const totalAmount = ref(0);

    watchEffect(() => {
      totalTarget.value = props.userProfile.total_balance;
    });

    const saveExpenditureData = () => {
      allExpenditure.value.push(firstData);
      allExpenditure.value.push(secondData);
      allExpenditure.value.push(thirdData);

      if (localStorage.getItem("expense") == null) {
        const stringedExpense = JSON.stringify(allExpenditure.value);
        localStorage.setItem("expense", stringedExpense);
      } else {
        let parsedExpense = JSON.parse(localStorage.getItem("expense"));
        parsedExpense.push(firstData);
        parsedExpense.push(secondData);
        parsedExpense.push(thirdData);
        localStorage.setItem("expense", JSON.stringify(parsedExpense));
      }

      window.location.reload();
    };

    const sumAmount = () => {
      let amountList = [
        +firstData.amount,
        +secondData.amount,
        +thirdData.amount,
      ];
      let summedAmountList = amountList.reduce((a, b) => {
        return a + b;
      });
      totalAmount.value = summedAmountList;
      emit("summedExpense", totalAmount.value);
    };

    const addAmount = () => {
      sumAmount();
    };

    const setExpenseDate = (e) => {
      firstData.date = new Date(e.target.value).toLocaleDateString();
      secondData.date = new Date(e.target.value).toLocaleDateString();
      thirdData.date = new Date(e.target.value).toLocaleDateString();
    };

    const updateTotalTarget = () => {
      emit('updateTarget', totalTarget.value)
    }

    return {
      totalTarget,
      firstData,
      secondData,
      thirdData,
      saveExpenditureData,
      allExpenditure,
      totalAmount,
      sumAmount,
      addAmount,
      setExpenseDate,
      updateTotalTarget
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-card {
  height: 104px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 6px;
  padding: 10px 15px;
}

.welcome-card div:first-child span:first-child {
  font-size: 22px;
  line-height: 28px;
  color: #4de897;
  font-weight: 800;
}

.welcome-card div:first-child span:nth-child(2) {
  font-size: 22px;
  line-height: 28px;
  font-weight: 800;
}
.welcome-card div:first-child div:nth-child(3) {
  font-size: 15px;
}

.label div:first-child {
  font-size: 16px;
  color: #30443c;
}

.input-field {
  background: #ffffff;
  border: 1px solid #cad0c9;
  border-radius: 4px;
  padding: 8px 17px;
}

.input-field:focus {
  background: #ffffff;
  border: 1px solid #4de897;
  outline: none;
  border-radius: 4px;
  padding: 8px 17px;
}

.gross-total {
  width: 115px;
  border: 1px solid #4de897;
}

.save-expense {
  background: #4de897;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 15px;
  font-weight: 700;
}
</style>
