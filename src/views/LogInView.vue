<template>
    <div class="w-[100vw] h-[100vh] flex text-white">
        <LoadingModal v-if="isLoading" />
        <div class="h-[100vh] w-[50vw] bg-gradient-to-tl from-purple-950 to-blue-900">
            <div
                class="w-2/3 flex flex-wrap m-auto pt-[20%]">
                <h1 class="basis-full font-bold text-5xl mb-12">ورود به بخش کارفرمایان</h1>
                <div class="w-full mb-7">
                    <span class="w-full text-2xl mb-3 block pb-2">- ایمیل / نام کاربری</span>
                    <div class="bg-blue-900">
                        <LogInput v-model="userInfo.userName" placeHolder="نام کاربری" type="text" name="text" class=" outline-none bg-white bg-opacity-20 w-full h-14 rounded-lg pr-2 pb-1 placeholder-white placeholder-opacity-100"/>
                    </div>
                    <span v-if="$v.userName.$error" class="text-red-400 mt-1 block text-sm md:text-base">{{
                        $v.userName.$errors[0].$message
                    }}</span>
                </div>
                <div class="w-full mb-7">
                    <span class="w-full text-2xl mb-3 block pb-2">- گذرواژه</span>
                    <div class="bg-blue-900">
                        <LogInput v-model="userInfo.passWord" placeHolder="رمز عبور" type="password" name="password" class=" outline-none bg-white bg-opacity-20 w-full h-14 rounded-lg pr-2 pb-1 placeholder-white placeholder-opacity-100"/>
                    </div>
                    <span v-if="$v.passWord.$error" class="text-red-400 mt-1 block text-sm md:text-base">{{
                        $v.passWord.$errors[0].$message
                    }}</span>
                </div>
                <button @click="submit"
                    class="bg-white text-black mt-7 font-semibold text-3xl rounded-lg w-full h-14 pb-3 hover:-translate-y-1 duration-200">ورود</button>
            </div>
        </div>
        <div class="h-[100vh] w-[50vw]">
    
        </div>
    </div>
</template>

<script setup>
import LoadingModal from '../components/LoadingModal.vue'
import LogInput from '../components/LogInput.vue'
import { computed, ref } from 'vue';
// ====Plugins======
import useValidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const isLoading = ref(false)

const userInfo = ref({
    userName: '',
    passWord: ''
})
const rules = computed(() => {
    return {
        userName: { required: helpers.withMessage('لطفا نام کاربزی خود را وارد کنید.', required) },
        passWord: { required: helpers.withMessage('لطفا رمز عبور خود را وارد کنید.', required) },
    }
})
const $v = useValidate(rules, userInfo)
console.log($v.value)

const submit = async () => {
    $v.value.$validate()
    if (!$v.value.$error) {
        console.log('send info')
        isLoading.value = true;
        setTimeout(() => {
            isLoading.value = false;
            toast.error('نام کاربری یا رمز عبور اشتباه است.', {
                autoClose: 2000,
                rtl: true,
                position: toast.POSITION.TOP_CENTER,
                transition: toast.TRANSITIONS.SLIDE,
            })
        }, 2000)
    }
}


</script>

<style scoped></style>