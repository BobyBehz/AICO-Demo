<template>
    <div class="flex h-screen">
        <aside class="basis-1/5 xl:basis-1/6 custom-aside-bg text-white relative">
            <div class="flex justify-center items-center gap-2 mt-10">
                <img class="w-8 h-8" src="../assets/images/dashboard-icon.png" alt="">
                <h1 class="text-2xl font-semibold">پنل کاربری</h1>
            </div>
            <nav class="flex flex-wrap gap-8 pr-[20%] xl:pr-[30%] mt-10">
                <RouterLink v-for="child in panelRoutes"
                    class="basis-full flex items-center gap-2 hover:text-purple-500 hover:scale-105 ease-in-out duration-200"
                    :to="child.path">
                    <img class="w-5 h-5" src="../assets/images/dashboard-icon.png" alt="">
                    <span>{{ child.meta.breadCrumb }}</span>
                </RouterLink>
                <div class="basis-full flex items-center gap-2 hover:text-purple-500 hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <img class="w-5 h-5" src="../assets/images/dashboard-icon.png" alt="">
                    <span>امور مالی</span>
                </div>
                <div class="basis-full flex items-center gap-2 hover:text-purple-500 hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <img class="w-5 h-5" src="../assets/images/dashboard-icon.png" alt="">
                    <span>امور کارمندان</span>
                </div>
                <div class="basis-full flex items-center gap-2 hover:text-purple-500 hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <img class="w-5 h-5" src="../assets/images/dashboard-icon.png" alt="">
                    <span>امور حقوقی</span>
                </div>
                <div class="basis-full flex items-center gap-2 hover:text-purple-500 hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <img class="w-5 h-5" src="../assets/images/dashboard-icon.png" alt="">
                    <span>اطلاعات کاربری</span>
                </div>
                <div class="basis-full flex items-center gap-2 hover:text-purple-500 hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <img class="w-5 h-5" src="../assets/images/dashboard-icon.png" alt="">
                    <span>تاریخچه</span>
                </div>
                <div class="basis-full flex items-center gap-2 hover:text-purple-500 hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <img class="w-5 h-5" src="../assets/images/dashboard-icon.png" alt="">
                    <span>پشتیبانی</span>
                </div>
                <div class="basis-full flex items-center gap-2 hover:text-purple-500 hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <img class="w-5 h-5" src="../assets/images/dashboard-icon.png" alt="">
                    <span>درباره ما</span>
                </div>
            </nav>
            <footer class="flex justify-center flex-wrap gap-3 absolute bottom-0 pb-3">
                <div class=" w-20 h-20 rounded-full">
                    <img class="w-full h-full rounded-full object-cover object-center" src="../assets/images/AICO-logo.png"
                        alt="">
                </div>
                <span class="text-xs text-center">تمام حقوق مادی و معنوی این برنامه محفوظ است.</span>
            </footer>
        </aside>
        <main class="basis-4/5 xl:basis-5/6 bg-gray-100 overflow-y-auto">
            <header class="bg-white flex items-center gap-4 border-b border-blue-900 px-10 pt-8 pb-4">
                <div class="text-2xl font-semibold grow">
                    پنل کاربری
                </div>
                <div class="w-6 h-6">
                    <img class="w-full object-cover object-center h-full" src="../assets/images/notifications.png" alt="">
                </div>
                <div class="w-6 h-6">
                    <img class="w-full h-full object-cover object-center" src="../assets/images/massages.png" alt="">
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex items-center font-semibold">
                        <svg class="w-5 pb-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect width="24" height="24" fill="white"></rect>
                                <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        ADMIN
                    </div>
                    <div class="bg-blue-900 rounded-full w-12 aspect-square"></div>
                </div>
            </header>
            <RouterView />
        </main>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import router from '../router'
const routeMatches = computed(() => {
    let matches = router.currentRoute.value.matched;
    return matches
})
const panelRoutes = ref(router.options.routes.filter(x => x.name == 'panel')[0].children)

</script>

<style scoped>
.custom-aside-bg {
    background: linear-gradient(160deg, #172554 70%, #3b0764);
}
</style>