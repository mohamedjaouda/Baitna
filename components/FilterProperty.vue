<template>
    <div class="flex flex-col justify-center gap-y-14 align-middle h-[250px] w-[900px] bg-White -mt-40 border-[1px] border-Gray3 rounded-xl mx-auto relative">
        <div class="flex flex-row gap-x-12 justify-around align-middle mx-auto">
            <div class="relative flex flex-row justify-between align-middle w-[540px] h-[70px] mx-auto px-4  rounded-[15px] shadow-custom">
                <input type="search" class="border-none w-[100%] px-4 h-[100%] my-auto :foucs outline-none :value text-2xl placeholder: text-Gray5" placeholder="Search Location">
                <button class="w-[75px] h-[45px] my-auto pr-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="45" viewBox="0 0 98 55" fill="none">
                    <rect x="0.463609" y="1.44017" width="96.5134" height="52.8331" rx="14.3719" fill="#FEFEFE" stroke="#BEBEBE" stroke-width="0.927217"/>
                    <path d="M60.8048 22.0391H54.0508" stroke="#070707" stroke-opacity="0.980392" stroke-width="1.85443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.7878 22.0391H38.2852" stroke="#070707" stroke-opacity="0.980392" stroke-width="1.85443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M47.2758 26.0203C49.4517 26.0203 51.2156 24.2564 51.2156 22.0805C51.2156 19.9046 49.4517 18.1406 47.2758 18.1406C45.0999 18.1406 43.3359 19.9046 43.3359 22.0805C43.3359 24.2564 45.0999 26.0203 47.2758 26.0203Z" stroke="#070707" stroke-opacity="0.980392" stroke-width="1.85443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M60.7878 34.4414H56.2852" stroke="#070707" stroke-opacity="0.980392" stroke-width="1.85443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.0392 34.4414H38.2852" stroke="#070707" stroke-opacity="0.980392" stroke-width="1.85443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M51.7992 38.3875C53.9752 38.3875 55.7391 36.6236 55.7391 34.4477C55.7391 32.2717 53.9752 30.5078 51.7992 30.5078C49.6233 30.5078 47.8594 32.2717 47.8594 34.4477C47.8594 36.6236 49.6233 38.3875 51.7992 38.3875Z" stroke="#070707" stroke-opacity="0.980392" stroke-width="1.85443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="h-[80px] w-[180px] my-auto bg-transparent ">
                <SwitchButton />
            </div>
        </div>
    <div class="mx-auto border-none overflow-visible focus: outline-none" name="work_days" id="id_work_days" multiple>
      <button class="mx-6 w-[60px] h-[60px] cursor-pointer border-[1px] rounded-2xl border-Gray4"></button>
      <button class="mx-6 w-[60px] h-[60px] cursor-pointer border-[1px] rounded-2xl border-Gray4"></button>
      <button class="mx-6 w-[60px] h-[60px] cursor-pointer border-[1px] rounded-2xl border-Gray4"></button>
      <button class="mx-6 w-[60px] h-[60px] cursor-pointer border-[1px] rounded-2xl border-Gray4"></button>
      <button class="mx-6 w-[60px] h-[60px] cursor-pointer border-[1px] rounded-2xl border-Gray4"></button>
      <button class="mx-6 w-[60px] h-[60px] cursor-pointer border-[1px] rounded-2xl border-Gray4"></button>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#id_work_days::-moz-focus-inner {
  border: 0;
}
   
</style>