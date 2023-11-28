<template>
    <div class=" w-[50px] h-[45px] my-auto">
        <Popover class="relative">
            <PopoverButton class="group inline-flex items-center rounded-full py-[10px] px-[12px] text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 bg-Black1">
                <span class="text-White">MJ</span>
            </PopoverButton>
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                <PopoverPanel>
                    <div class="bg-[#F1F1F1] absolute left-[100%] rounded-[30px] mt-1  max-w-sm h-[480px] w-[450px] -translate-x-96 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div class="w-[300px] h-[330px] bg-[#F8F8F8] flex flex-col justify-evenly align-middle rounded-[20px] mx-auto mt-12">
                            <div class=" flex flex-col justify-center gap-y-3 mt-5">
                                <div class="w-[100px] h-[100px] bg-Gray5 rounded-full flex justify-center m-auto"><h1 class=" text-Black1 m-auto text-4xl font-medium">MJ</h1></div>
                                <div class="flex flex-col">
                                    <h3 class="text-Black1 text-[28px] font-bold self-center">Jaouda</h3>
                                    <p class="text-Black1 text-[16px] font-normal self-center">Jaouda@email.com</p>
                                </div>
                            </div>
                            <div class="w-full flex flex-row align-middle justify-evenly m-auto ">
                                <div class="w-[50%] flex flex-col justify-around align-middle my-auto border-r-[1px] border-Gray4">
                                    <p class="text-Gray3 text-[11px] text-center">Birthdate</p>
                                    <p class="text-center text-[14px]">Aug 16 2000</p>
                                </div>
                                <div class="w-[50%] flex flex-col justify-center align-middle my-auto">
                                    <p  class="text-Gray3 text-[11px] text-center">Sex</p>
                                    <p class="text-center text-[14px]">Male</p>
                                </div>
                            </div>
                            <NuxtLink to="/settings" class="text-Primary300 font-semibold text-center mb-4">Edit</NuxtLink>
                        </div>
                    </div>
                </PopoverPanel>
            </transition>
        </Popover>
    </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

</script>
