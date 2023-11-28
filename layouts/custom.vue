<template>
    <main class="h-[100dvh] w-full flex flex-row">
        <slot />
        <section class="bg-[#D5EAFB] h-full w-[50%] m-auto">
            <div class="flex flex-col justify-around gap-y-10 align-middle mx-auto px-auto w-[50%] my-24">
                <img src="../assets/imgs/Vector.png" alt="" class="w-48 self-center">
                <h1 class="text-center text-4xl text-Primary500">
                    Welcome To Baitna
                </h1>
                <h3 class="text-center text-Primary500 w-[100]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nemo rem explicabo, sequi sdf rsass
                </h3>
            </div>
        </section>
    </main>
</template>

<script setup>

</script>

<style scoped></style>