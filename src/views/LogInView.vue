<template>
    <div class="w-[100vw] h-[100vh] flex text-white">
        <LoadingModal v-if="isLoading" />
        <div class="h-[100vh] w-[50vw] bg-gradient-to-tl from-purple-950 to-blue-900 rounded-tl-lg">
            <div class="w-2/3 flex flex-wrap m-auto pt-[30%] 2xl:pt-[20%]">
                <h1 class="basis-full font-bold text-2xl lg:text-4xl 2xl:text-5xl mb-12">ورود به بخش کارفرمایان</h1>
                <div class="w-full mb-7">
                    <span class="w-full text-lg lg:text-2xl mb-3 block pb-2">- ایمیل / نام کاربری</span>
                    <div class="bg-blue-900">
                        <LogInput v-model="userInfo.userName" placeHolder="نام کاربری" type="text" name="text"
                            :class="['outline-none bg-white bg-opacity-20 w-full h-10 lg:h-12 xl:h-14 rounded-lg pr-2 pb-1 placeholder-white placeholder-opacity-100', $v.userName.$error ? 'border border-red-600' : '']" />
                    </div>
                    <span v-if="$v.userName.$error" class="text-red-400 mt-1 block text-sm md:text-base">{{
                        $v.userName.$errors[0].$message
                    }}</span>
                </div>
                <div class="w-full mb-7">
                    <span class="w-ful text-lg lg:text-2xl mb-3 block pb-2">- گذرواژه</span>
                    <div class="bg-blue-900 relative">
                        <LogInput v-model="userInfo.passWord" placeHolder="رمز عبور" :type="passwordInputType" name="password"
                            :class="['outline-none bg-white bg-opacity-20 w-full h-10 lg:h-12 xl:h-14 rounded-lg pr-2 pb-1 placeholder-white placeholder-opacity-100', $v.passWord.$error ? 'border border-red-600' : '']" />
                        <button @click="togglePasswordInputType" :class="['w-8 absolute left-[2%] top-[20%] focus:outline-none hover:scale-110 duration-200', passwordInputType === 'password' ? 'opacity-30' : '']">
                            <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 442.04 442.04" xml:space="preserve"
                                stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path
                                                d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z">
                                            </path>
                                        </g>
                                        <g>
                                            <path
                                                d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z">
                                            </path>
                                        </g>
                                        <g>
                                            <path
                                                d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <span v-if="$v.passWord.$error" class="text-red-400 mt-1 block text-sm md:text-base">{{
                        $v.passWord.$errors[0].$message
                    }}</span>
                </div>
                <button @click="submit"
                    class="bg-white text-black mt-7 font-semibold text-xl lg:text-2xl xl:text-3xl rounded-lg w-full h-10 lg:h-12 xl:h-14 pb-3 hover:scale-105 hover:-translate-y-1 duration-200">ورود</button>
            </div>
        </div>
        <div class="h-[100vh] w-[50vw]">
            <img src="../assets/images/circle.png" class="w-3/5 aspect-square -ml-[25%] -mt-[40%] mr-auto"
                alt="logo circle">
            <img src="../assets/images/loginPanel.png" class="-ml-2 mr-auto mt-16 w-4/5 h-2/3" alt="logo circle">
        </div>
    </div>
</template>

<script setup>
import LoadingModal from '../components/LoadingModal.vue'
import LogInput from '../components/LogInput.vue'
import { computed, ref } from 'vue';
import router from '../router'
// ==== Plugins ======
import useValidate from '@vuelidate/core'
import { required, helpers, minLength } from '@vuelidate/validators'

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const passwordInputType = ref('password')
const isLoading = ref(false)
const userAccount = {
    userName: 'admin',
    passWord: '123'
}
sessionStorage.setItem('userPassword', userAccount.passWord)
console.log(sessionStorage)
// ==== validation ====
const userInfo = ref({
    userName: '',
    passWord: ''
})
const rules = computed(() => {
    return {
        userName: { required: helpers.withMessage('لطفا نام کاربری خود را وارد کنید.', required) },
        passWord: { required: helpers.withMessage('لطفا رمز عبور خود را وارد کنید.', required) },
    }
})
const $v = useValidate(rules, userInfo)

const submit = async () => {
    $v.value.$validate()
    if (!$v.value.$error) {
        if (userInfo.value.userName == userAccount.userName && userInfo.value.passWord == userAccount.passWord) {
            sessionStorage.setItem('filledPassword' , userInfo.value.passWord)
            console.log(sessionStorage)
            isLoading.value = true;
            setTimeout(() => {
                isLoading.value = false;
                router.push('/panel')
            }, 2000)
        } else {
            isLoading.value = true;
            setTimeout(() => {
                isLoading.value = false;
                resetInput()
                toast.error('نام کاربری یا رمز عبور اشتباه است.', {
                    autoClose: 2000,
                    rtl: true,
                    position: toast.POSITION.TOP_CENTER,
                    transition: toast.TRANSITIONS.SLIDE,
                })
            }, 2000)
        }
    }
}
const resetInput = () => {
    $v.value.$reset()
    userInfo.value.userName = '';
    userInfo.value.passWord = '';
}
const togglePasswordInputType = () => {
    if (passwordInputType.value === 'password') {
        passwordInputType.value = 'text'
    } else {
        passwordInputType.value = 'password'
    }
}

</script>

<style scoped></style>