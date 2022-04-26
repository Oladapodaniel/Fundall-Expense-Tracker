<template>
  <div class="container-fluid container-top">
      <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div>
                    <img src="../assets/Fundall-MintGreen-Lockup.svg"/>
                </div>
                <div class="d-flex flex-column flex-sm-row justify-content-sm-start align-items-sm-end mt-4">
                <div class="img-rect c-pointer profile-overlay">
                        <!-- <img src="../assets/User.svg" class="" @click="updatePicture"/> -->
                        <img :src="url ? url : userProfile.avatar" class="" @click="updatePicture" v-if="url || userProfile.avatar"/>
                         <input type="file" ref="selectImage" @change="choosePicture" hidden/>
                </div>
                    <div class="ml-sm-3 mt-3 mt-sm-0">
                        <div class="user">
                            <div>{{ userProfile.firstname }} {{ userProfile.lastname }}</div>
                            <div>{{ userProfile.email }}</div>
                        </div>
                    </div>
                </div>
                <div class="row monthly-target mt-5">
                    <div class="col-12">Target Monthly Expenses</div>
                    <div class="col-12"><img src="../assets/naira.svg" />{{ userProfile.total_balance }}</div>
                    <div class="col-12 mt-5">
                        <div class="range">
                            <div class="current-iteration" :style="{ width: `${progressBar}%` }"></div>
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
                                    <div class="col-4">Date</div>
                                    <div class="col-4">Item</div>
                                    <div class="col-3">Amount</div>
                                </div>
                                <div class="row mt-4" v-for="(item, index) in computePaginatedValues" :key="index">
                                    <div class="col-1">
                                        <img src="../assets/Mask.svg" />
                                    </div>
                                    <div class="col-4">{{ item.date }}</div>
                                    <div class="col-4">{{ item.item }}</div>
                                    <div class="col-3">{{ item.amount }}</div>
                                </div>
                                <div class="row p-4">
                                    <Pagination :list="expenditureData" :pageList="expenditureData" :numberPerPage="5" @paginated="setPaginatedTable" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 expense-form-bg py-5 px-4">
            <AddExpense :userProfile="userProfile" @summedExpense="setTotalValue" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AddExpense from '../components/AddExpense.vue';
import axios from '@/gateway/backendapi';
import { ref, computed } from '@vue/reactivity';
import { useToast } from "vue-toastification";
import Pagination from '../components/Pagination.vue';

export default {
    components: {
        AddExpense,
        Pagination
    },
    setup () {
        const toast = useToast()
        const userProfile = ref({})
        const selectImage = ref()
        const url = ref("")
        const expensesArr  = ref([])
        const paginatedValues = ref([])
        const expenditureData = ref(JSON.parse(localStorage.getItem('expense')) ? JSON.parse(localStorage.getItem('expense')) : [])
      

        const computePaginatedValues = computed(() => {
            if (paginatedValues.value.length > 0) return paginatedValues.value
            return []
        })

        const progressBar = computed(() => {
            let summedTotal = JSON.parse(localStorage.getItem('expense')) ? JSON.parse(localStorage.getItem('expense')).reduce((a, b) => {
                return { amount: a.amount + b.amount }
            }) : []
            console.log(summedTotal)
            if (userProfile.value && Object.keys(userProfile.value).length > 0) return +summedTotal.amount / +userProfile.value.total_balance.split(',').join("") * 100
            return 0
        })
      
        const getUserProfile = async () => {
            try {
                let { data } = await axios.get('/api/v1/base/profile')
                console.log(data)
                userProfile.value = data.success.data
            }
            catch (err) {
              console.log(err)
            }
        }
        getUserProfile()

        const choosePicture = async (e) => {

            url.value = URL.createObjectURL(e.target.files[0])
            let formData = new FormData();
            formData.append('avatar', e.target.files[0])
            console.log(e.target.files)
    
            let headers = {
                'Content-Type': 'multipart/form-data'
            }

            try {
                let { data } = await axios.post('/api/v1/base/avatar', formData, { headers: headers })
                console.log(data)
                toast.success(data.success.message, {
                    timeout: 4000
                });
            }
            catch (err) {
            console.log(err)
            }
        }

        const updatePicture = () => {
            selectImage.value.click();
            // choosePicture();
        }

        const setPaginatedTable = (payload) => {
            paginatedValues.value = payload
            console.log(payload)
        }

        const setTotalValue = (payload) => {
            console.log(payload, '43434343')
            let summedTotal = JSON.parse(localStorage.getItem('expense')) ? JSON.parse(localStorage.getItem('expense')).reduce((a, b) => {
                return { amount: a.amount + b.amount }
            }) : []
            console.log(summedTotal)

            if ((+payload + summedTotal.amount) > +userProfile.value.total_balance.split(',').join("")) {
                toast.info('Amount already exceeds monthly target expense', {
                    timeout: 4000
                });
            }   else {
                console.log('not exceeeded')
            }
        }
        return {
            url,
            userProfile,
            choosePicture,
            updatePicture,
            selectImage,
            expenditureData,
            expensesArr,
            setPaginatedTable,
            paginatedValues,
            computePaginatedValues,
            setTotalValue,
            progressBar
        }
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
        /* height: 32px;
        width: 28px; */
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 19px
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
        height: 7px;
        transition: all 1.4s ease-in-out;
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
        
    /* .expense-table div:nth-child(2) div {
        margin-top: 30px;
    } */
    
    /* .expense-table div:nth-child(2) div:nth-child(3n) {
        font-weight: 400;
        color: #4DE897;
    } */


    .expense-form-bg {
        background: #F2F3F7;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
        border-radius: 6px;
    }

    /* .profile-overlay {
        overflow: hidden;
        position: relative;
        transition: all 3s ease-in-out
    }

    .profile-overlay img {
        position: relative;
    
        transition: all 3s ease-in-out
    }

    .profile-overlay::before,
    .profile-overlay::after {
        content: '';
        position: absolute;
        inset: 0;
        transition: all 3s ease-in-out
    }

    .profile-overlay:before {
        z-index: 1;
        background: black;
        border-radius: 19px;
        position: absolute;
        margin: 0 auto;
        opacity: .3;
       
        opacity: 0;
        -webkit-transition: opacity 0.3s ease;
        -moz-transition: opacity 0.3s ease;
        -ms-transition: opacity 0.3s ease;
        -o-transition: opacity 0.3s ease;
        transition:  opacity 0.3s ease-in-out;
       
    }

    .profile-overlay:hover:before {
        opacity: .6;
    } */

    @media (max-width: 578px) {
         .user div:last-child, .monthly-target div:first-child{
            font-size: 16px;
            letter-spacing: -0.3px;
        }
    }

</style>