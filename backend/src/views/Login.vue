<template>
    <GuestLayout title="Sign in to your account">
        <form @submit.prevent="login" method="post">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                    <input autocomplete="off" id="email" name="email" type="text"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address" />
                    <label for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                        Address</label>
                </div>
                <div class="relative">
                    <input autocomplete="off" id="password" name="password" type="password"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password" />
                    <label for="password"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div>
                    <a href="/request-password" class="text-blue-500 text-base flex justify-end">Forgot
                        Password?</a>
                </div>
                <div class="relative">
                    <button class="bg-blue-500 text-white rounded-md px-4 py-1">Sign In</button>
                </div>

            </div>
        </form>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from './GuestLayout.vue';

function login(){
    console.log('submit');
}
</script>
