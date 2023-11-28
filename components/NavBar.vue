
<script setup>

</script>

<template>
    <nav class="w-full h-[60px] border-b-2 border-Gray5 flex flex-row align-middle justify-between py-auto px-10 bg-[#ffffffdc] backdrop-opacity-[.5] backdrop-blur-3xl fixed z-10">
        <img src="../assets/imgs/baitna-logo.png" class="w-[100px] object-contain" >
            <li class="flex flex-raw justify-center align-middle gap-x-28 my-auto">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/saved">Saved</NuxtLink>
                <NuxtLink to="/settings">Settings</NuxtLink>
            </li>
        <div class="flex flex-row align-middle gap-x-8 my-auto">
            <LanguageBotton />
            <button class="bg-Primary300 rounded-full w-[100px] h-[40px] my-auto">
                <NuxtLink to="/addProperty">
                    <p class="text-White text-center text-[11px] tracking-wider">Add Property</p>
                </NuxtLink>
            </button>
            <LoginButton />
        </div>
    </nav>
    <main>
        <slot />
    </main>
</template>

<style scoped>
.router-link-exact-active {
    color: #000000;
    font-weight: 700;
    border-bottom: 2px solid #0294F3;
}
</style>