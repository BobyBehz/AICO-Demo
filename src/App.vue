<template>
  <div dir="rtl">
    <router-view></router-view>
  </div>
</template>

<script setup>
import router from './router';

router.push('/login')
</script>

<style scoped>

</style>
