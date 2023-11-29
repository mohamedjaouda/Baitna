<script setup>
definePageMeta({
    layout: "custom"
})
const { registerUser } = useFirebaseAuth() // auto-imported

const creds = reactive({
    email: "",
    password: ""
})

async function handleRegistration() {
    await registerUser(creds.email, creds.password)
}
</script>

<template>
    <section class="h-[100%] w-[50%]">
        <div class="flex flex-col justify-start align-middle">
            <div class="flex flex-row justify-between align-baseline  my-4 mx-auto w-[85%]">
                <NuxtLink to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 54 60" fill="none">
                        <path d="M14.819 20.8672L5.88672 29.686L13.6416 37.8454" stroke="black" stroke-width="4.90038"
                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M32.3593 29.6702L8.26172 29.7148" stroke="black" stroke-width="4.90038"
                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </NuxtLink>
                <NuxtLink to="/" class="text-Gray4 my-auto text-[16px]">
                    Skip
                </NuxtLink>
            </div>
            <div class="flex flex-col justify-between align-middle mx-auto gap-y-16">
                <img src="../../assets/imgs/baitna-logo.png" alt="baitna logo" class="w-[12rem] self-center">
                <h1 class="text-4xl font-[600] tracking-wider leading-relaxed text-center">Create Your<br>Account</h1>
            </div>
        </div>
        <div class="flex flex-col">
            <form class="space-y-6 w-[500px] flex flex-col justify-center mx-auto" action="#" method="POST"
                @submit.prevent="handleRegistration">
                <div>
                    <div class="mt-2">
                        <input placeholder="Email Address" name="email" type="email" autocomplete="email"
                            v-model="creds.email" required
                            class="block w-full rounded-md border-0 py-3 px-5 text-Gray1 ring-1 ring-inset ring-Gray4 placeholder:text-Gray4 focus:ring-2 focus:ring-inset focus:ring-Primary300  sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div>
                    <div class="mt-2">
                        <input placeholder="Password" name="password" type="password" v-model="creds.password"
                            autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-3 px-5 text-Gray1 ring-1 ring-inset ring-Gray4 placeholder:text-Gray4 focus:ring-2 focus:ring-inset focus:ring-Primary300  sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="flex flex-col gap-y-8">
                    <div class="self-center">
                        <h4 class="text-center text-Gray3 text-lg">
                            By using this app you are agreeing to our <br>
                            <NuxtLink to="/" class="text-Primary300">Privacy Policy</NuxtLink>
                        </h4>
                    </div>
                    <button
                        class="flex w-full justify-center rounded-md bg-Primary300 text-White px-4 py-3 text-lg  leading-6 text-white tracking-wider shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        type="submit">
                        Create >
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
<style scoped></style>