<template>
    <div class=" bg-gradient-to-tr from-blue-400 to-green-600 w-[100vw] h-[100vh] pt-[30%] md:pt-[10%]">
        <LoadingModal v-if="isLoading" />
        <div class="container">
            <div
                class="w-[300px] px-8 bg-white p-3 flex flex-col items-center md:w-[400px] m-auto aspect-square rounded-lg shadow-lg">
                <h1 class="md:text-xl text-base font-bold mb-10">ورود به پنل کاربری</h1>
                <div class="w-full mb-3">
                    <span class="w-full text-sm md:text-base text-right block pb-2">نام کاربری خود را وارد کنید</span>
                    <LogInput v-model="userInfo.userName" placeHolder="نام کاربری" />
                    <span v-if="$v.userName.$error" class="text-red-600 text-sm md:text-base">{{ $v.userName.$errors[0].$message
                    }}</span>
                </div>
                <div class="w-full mb-3">
                    <span class="w-full text-sm md:text-base text-right block pb-2">پسورد خود را وارد کنید</span>
                    <LogInput v-model="userInfo.passWord" placeHolder="رمز عبور" />
                    <span v-if="$v.passWord.$error" class="text-red-600 text-sm md:text-base">{{ $v.passWord.$errors[0].$message
                    }}</span>
                </div>
                <button @click="submit"
                    class="bg-green-400 mt-7 border rounded-lg text-sm md:text-base border-green-500 w-full h-8 pb-1">ورود</button>
            </div>
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

<style scoped>

</style>