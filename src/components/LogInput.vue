<template>
        <input class=" outline-none border w-full border-green-400 rounded-lg pr-2 h-8 text-sm lg:text-base pb-1" v-model="inputVal" type="text" :placeholder="placeHolder">
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: String,
    placeHolder: String,
}) 
const emit = defineEmits([
    'update:modelValue'
])
const inputVal = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
</script>

<style scoped>

</style>