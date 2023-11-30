<template>
    <div class="flex justify-center align-middle h-[70px] w-[100%] border-[1px] border-Gray4 rounded-xl">
        <div class="flex justify-between  rounded-md shadow-sm" role="group">
            <button @click="enabled = !enabled" :class="enabled ? 'bg-White' : 'bg-Primary300 text-White'"
                class="w-[80px] bg-Primary300 rounded-lg my-2">Sale</button>
            <button @click="enabled = !enabled" :class="enabled ? 'bg-Primary300 text-White' : 'bg-White'"
                class="w-[80px] bg-Primary300 rounded-lg my-2">Rent</button>
        </div>
    </div>
</template>

<script setup>
const enabled = ref(true)
</script>
