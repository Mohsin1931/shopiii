<template>
    <GuestLayout title="Reset your password">
        <form @submit.prevent="submit" method="post">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                    <input autocomplete="off" id="password" name="password" type="password"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password" />
                    <label for="password"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">New
                        Password</label>
                </div>
                <div class="relative">
                    <input autocomplete="off" id="password" name="password" type="password"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password" />
                    <label for="password"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm
                        Password</label>
                </div>
                <div class="relative">
                    <button class="bg-blue-500 text-white rounded-md px-4 py-1">Submit</button>
                </div>

            </div>
        </form>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from './GuestLayout.vue';

function submit(){
    console.log('submit');
}
</script>
<style scoped></style>
