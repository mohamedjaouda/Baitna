<script setup>
definePageMeta({
    layout: "custom"
})

const { email } = useRoute().params

</script>

<template>
    <section class="h-[100%] w-[50%] flex flex-col justify-evenly align-middle m-auto">
        <div class="flex flex-col justify-center"></div>
        <div class="w-[70%] flex flex-col justify-center align-middle mx-auto gap-y-4">
            <h1 class="text-center text-3xl font-medium">Email Confirmation</h1>
            <h4 class="text-center">We have sent email to <strong class="text-Primary300 ">{{ email }}</strong>
                to confirm the validity of our email address</h4>
            <button class="text-Primary300">Send Again</button>
        </div>
        <div class="flex flex-col justify-center gap-y-4 align-middle mx-auto">
            <h4 class="text-Gray4">
                If your account is confirmed , please proceed to login
            </h4>
            <button class="bg-Primary300 w-[280px] h-[45px] rounded-lg text-White self-center">
                <NuxtLink to="login">
                    Log In
                </NuxtLink>
            </button>
        </div>
    </section>
</template>


<style scoped></style>