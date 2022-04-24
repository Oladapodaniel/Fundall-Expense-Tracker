<template>
  <div class="container-fluid container-top">
      <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div>
                    <img src="../assets/Fundall-MintGreen-Lockup.svg"/>
                </div>
                <div class="d-flex flex-column flex-sm-row justify-content-sm-start align-items-sm-end mt-4">
                <div class="img-rect">
                        <img src="../assets/User.svg" />
                </div>
                    <div class="ml-sm-3 mt-3 mt-sm-0">
                        <div class="user">
                            <div>Oladapo Daniel</div>
                            <div>oladapodaniel10@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div class="row monthly-target mt-5">
                    <div class="col-12">Target Monthly Expenses</div>
                    <div class="col-12">N560, 550</div>
                    <div class="col-12 mt-5">
                        <div class="range">
                            <div class="current-iteration"></div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="card-table p-3">
                            <div class="row">
                            <div class="col-12 expense-summary">Daily Expenses Summary</div>
                            <div class="col-12 expense-table">
                                <div class="row expense-header">
                                    <div class="col-1"></div>
                                    <div class="col-5">Date</div>
                                    <div class="col-6">Amount</div>
                                </div>
                                <div class="row">
                                    <div class="col-1">
                                        <img src="../assets/Mask.svg" />
                                    </div>
                                    <div class="col-5">Date</div>
                                    <div class="col-6">Amount</div>
                                    <!-- <div class="d-flex justify-content-between px-3 w-100 d-block d-sm-none">
                                        <div>Date</div>
                                        <div>50,000</div>
                                    </div> -->

                                    <div class="col-1">
                                        <img src="../assets/Mask.svg" />
                                    </div>
                                    <div class="col-5">Date</div>
                                    <div class="col-6">Amount</div>
                                    <div class="col-1">
                                        <img src="../assets/Mask.svg" />
                                    </div>
                                    <div class="col-5">Date</div>
                                    <div class="col-6">Amount</div>
                                    <div class="col-1">
                                        <img src="../assets/Mask.svg" />
                                    </div>
                                    <div class="col-5">Date</div>
                                    <div class="col-6">Amount</div>

                                </div>
                                <div class="row p-4">
                                    <div class="col-12 d-flex justify-content-center">
                                        <div>
                                            <span class="pagination-border px-3 py-2">1</span> of 5
                                        </div>
                                        <img src="../assets/chevron-down3.svg" alt="" class="ml-3"/>
                                        <img src="../assets/chevron-down4.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 expense-form-bg py-5 px-4">
            <AddExpense />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AddExpense from '../components/AddExpense.vue'
export default {
    components: {
        AddExpense
    }
}
</script>

<style scoped>
    .container-fluid {
        background: #FCFBFC;
        height: 100vh
    }
    .img-rect {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #C4C4C4;
        border-radius: 20px;
        height: 89px;
        width: 93px;

    }

    .img-rect img {
        height: 32px;
        width: 28px;
    }

    .user div:first-child, .monthly-target div:nth-child(2){
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -0.7px;
    }
    
    .user div:last-child, .monthly-target div:first-child{
        font-size: 21px;
        letter-spacing: -0.3px;
    }

    .range {
        height: 7px;
        border-radius: 10px;
        background: #EFEFEF;
    }

    .range > div.current-iteration {
        background: #4DE897;
        border-radius: 10px;
        width: 93px;
        height: 7px;
    }

    .card-table {
        background: #FFFFFF;
        box-shadow: 0px 0px 6px rgba(77, 232, 151, 0.19);
        border-radius: 10px;
    }

    .expense-summary {
        font-size: 14px;
        font-weight: 600;
    }

    .expense-table div:first-child.expense-header div {
        margin-top: 30px;
        font-weight: 500;
    }
        
    .expense-table div:nth-child(2) div {
        margin-top: 30px;
    }
    
    .expense-table div:nth-child(2) div:nth-child(3n) {
        font-weight: 400;
        color: #4DE897;
    }

    .pagination-border {
        mix-blend-mode: normal;
        opacity: 0.6;
        border: 1px solid #A4B0A3;
        border-radius: 3px;
    }

    .expense-form-bg {
        background: #F2F3F7;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
        border-radius: 6px;
    }

    @media (max-width: 578px) {
         .user div:last-child, .monthly-target div:first-child{
            font-size: 16px;
            letter-spacing: -0.3px;
        }
    }

</style>