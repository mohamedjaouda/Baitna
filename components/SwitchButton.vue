<template>
    <div class="flex justify-center align-middle h-[70px] w-[100%] border-[1px] border-Gray4 rounded-xl">
    <div class="flex justify-between  rounded-md shadow-sm" role="group">
        <button @click="enabled= !enabled" :class="enabled ? 'bg-White' : 'bg-Primary300 text-White'" class="w-[80px] bg-Primary300 rounded-lg my-2">Sale</button>
        <button @click="enabled = !enabled" :class="enabled ? 'bg-Primary300 text-White' : 'bg-White'" class="w-[80px] bg-Primary300 rounded-lg my-2">Rent</button>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// import { Switch } from '@headlessui/vue'

const enabled = ref(true)
</script>
<!-- 
<Switch v-model="enabled" 
            class="my-auto bg-transparent relative inline-flex h-[100%] w-[100%] shrink-0 cursor-pointer rounded-md border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ">
            <span class="absolute top-[30%] left-[20%] font-[400] text-lg text-center tracking-wide" :class="enabled ? 'text-Black1' : 'text-White'">Sale</span>
            <span aria-hidden="true" :class="enabled ? 'translate-x-[80%]' : 'translate-x-0'"
                class=" bg-Primary300 pointer-events-none inline-block h-[85%] w-[50%] mx-[10px] my-auto  transform rounded-lg bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
            <span class="absolute top-[30%] font-[400] text-lg text-center left-[60%] tracking-wide" :class="enabled ? 'text-White' : 'text-Black1'">Rent</span>
        </Switch> -->