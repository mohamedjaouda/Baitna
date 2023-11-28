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
                <h1 class="text-4xl font-[600] tracking-wider leading-relaxed text-center">Login To Your <br> Account</h1>
            </div>
        </div>
        <div class="flex flex-col">
            <form class="space-y-6 w-[500px] flex flex-col justify-center mx-auto" action="#" method="POST">
                <div>
                    <div class="mt-2">
                        <input placeholder="Email Address" id="email" name="email" type="email" autocomplete="email"
                            required
                            class="block w-full rounded-md border-0 py-3 px-5 text-Gray1 ring-1 ring-inset ring-Gray4 placeholder:text-Gray4 focus:ring-2 focus:ring-inset focus:ring-Primary300  sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div>
                    <div class="mt-2">
                        <input placeholder="Password" id="password" name="password" type="password"
                            autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-3 px-5 text-Gray1 ring-1 ring-inset ring-Gray4 placeholder:text-Gray4 focus:ring-2 focus:ring-inset focus:ring-Primary300  sm:text-sm sm:leading-6">
                    </div>
                    <div class="flex items-center justify-end mt-5">
                        <div class="text-sm">
                            <NuxtLink to="/" class="font-semibold text-indigo-600 hover:text-indigo-500 text-Primary300">Forgot password?</NuxtLink>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-Primary300 text-White px-4 py-3 text-lg  leading-6 text-white tracking-wider shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">LogIn</button>
                </div>
                <div class="self-center">
                    <h4>
                        Don't Have an Account? <NuxtLink to="/auth/signup" class="text-Primary300">Create Account</NuxtLink>
                    </h4>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: "custom"
})

</script>

<style scoped></style>