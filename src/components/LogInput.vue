<template>
        <input v-model="inputVal" :type="type" :name="name" :placeholder="placeHolder">
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: String,
    placeHolder: String,
    type: String,
    name: String,
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
input[type="password"] {
    -webkit-text-security: square;
}
</style>