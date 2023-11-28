<template>
    <section class="h-[100%] w-[50%] flex flex-col justify-center align-middle my-auto">
        <div class="flex flex-col justify-start align-middle">
            <div class="flex flex-col justify-between align-middle mx-auto gap-y-5">
                <img src="../../assets/imgs/baitna-logo.png" alt="baitna logo" class="w-[12rem] self-center">
                <h1 class="text-3xl font-[600] tracking-wider leading-normal text-center mb-5">Let’s get <br> to know you
                </h1>
            </div>
        </div>
        <div class="flex flex-col">
            <form class="w-[500px] flex flex-col justify-center mx-auto gap-y-5" action="#" method="POST">
                <div class="flex flex-row justify-between align-middle gap-x-5">
                    <input placeholder="First Name" name="Fname" type="text" autocomplete="first name" required
                        class="block w-full rounded-md border-0 py-3 px-5 text-Gray1 ring-1 ring-inset ring-Gray4 placeholder:text-Gray4 focus:ring-2 focus:ring-inset focus:ring-Primary300  sm:text-sm sm:leading-6">
                    <input placeholder="Last Name" name="Lname" type="text" autocomplete="last name" required
                        class="block w-full rounded-md border-0 py-3 px-5 text-Gray1 ring-1 ring-inset ring-Gray4 placeholder:text-Gray4 focus:ring-2 focus:ring-inset focus:ring-Primary300  sm:text-sm sm:leading-6">
                </div>
                <input placeholder="Phone Number" name="phone" type="text" required
                    class="block w-full rounded-md border-0 py-3 px-5 text-Gray1 ring-1 ring-inset ring-Gray4 placeholder:text-Gray4 focus:ring-2 focus:ring-inset focus:ring-Primary300  sm:text-sm sm:leading-6">
                <div class="flex flex-row justify-between align-middle gap-x-5">
                    <input placeholder="Birthdate" name="Birthdate" type='date' autocomplete="birthday" required
                        class="block w-full rounded-md border-0 py-3 px-5 text-Gray1 ring-1 ring-inset ring-Gray4 placeholder:text-Gray4 focus:ring-2 focus:ring-inset focus:ring-Primary300  sm:text-sm sm:leading-6">
                    <select
                        class="block w-full rounded-md border-0 py-3 px-5 text-Gray1 ring-1 ring-inset ring-Gray4 placeholder:text-Gray4 focus:ring-2 focus:ring-inset focus:ring-Primary300  sm:text-sm sm:leading-6">
                        <option value="" disabled selected hidden>Sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="flex flex-col gap-y-8">
                    <div class="self-center">
                        <h4 class="text-center text-Gray3 text-lg">
                            By using this app you are agreeing to our <br>
                            <NuxtLink to="/" class="text-Primary300">Privacy Policy</NuxtLink>
                        </h4>
                    </div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-Primary300 text-White px-4 py-3 text-lg  leading-6 text-white tracking-wider shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                        Create
                    </button>
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