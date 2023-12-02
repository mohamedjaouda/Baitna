<template>
    <section class="h-[100%] w-[50%] flex flex-col justify-evenly align-middle m-auto">
        <div class="w-[70%] flex flex-col justify-center align-middle mx-auto gap-y-2">
            <h1 class="text-center text-3xl font-medium">Your Email is Confirmed now!</h1>
            <h4 class="text-Gray4 text-center">
                You can now login & setup your account in a few steps
            </h4>
            <button class="bg-Primary300 w-[280px] h-[45px] rounded-lg text-White self-center mt-5">
                <NuxtLink to="login">
                    Log In
                </NuxtLink>
            </button>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: "custom"
})
</script>

<style scoped></style>