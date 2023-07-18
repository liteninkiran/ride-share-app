<template>

    <div class="pt-16">

        <!-- Heading -->
        <h1 class="text-3xl font-semibold mb-4">
            Enter your phone number
        </h1>

        <!-- Login Form -->
        <form v-if="!waitingOnVerification" action="#" @submit.prevent="handleLogin">

            <div
                class="overflow-hidden
                        shadow
                        sm:rounded-md
                        max-w-sm
                        mx-auto
                        text-left"
            >

                <!-- Phone Number -->
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <input
                            v-maska
                            data-maska="+44#### ######"
                            v-model="credentials.phone"
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="+447788 123456"
                            class="mt-1
                                    block
                                    w-full
                                    px-3
                                    py-2
                                    rounded-md
                                    border
                                    shadow-sm
                                    focus:outline-none
                                    border-gray-300
                                    focus:border-black"
                        >
                    </div>
                </div>

                <!-- Submit -->
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        @submit.prevent="handleLogin"
                        type="submit"
                        class="inline-flex 
                                justify-center 
                                rounded-md 
                                border 
                                border-transparent 
                                py-2 
                                px-4 
                                text-sm 
                                font-medium 
                                shadow-sm 
                                focus:outline-none
                                bg-black 
                                hover:bg-gray-600 
                                text-white"
                    >
                        Continue
                    </button>
                </div>

            </div>

        </form>

        <!-- Verification Form -->
        <form v-else action="#" @submit.prevent="handleVerification">

            <div
                class="overflow-hidden
                        shadow
                        sm:rounded-md
                        max-w-sm
                        mx-auto
                        text-left"
            >

                <!-- Phone Number -->
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <input
                            v-maska
                            data-maska="######"
                            v-model="credentials.login_code"
                            type="text"
                            name="login_code"
                            id="login_code"
                            placeholder="123456"
                            class="mt-1
                                    block
                                    w-full
                                    px-3
                                    py-2
                                    rounded-md
                                    border
                                    shadow-sm
                                    focus:outline-none
                                    border-gray-300
                                    focus:border-black"
                        >
                    </div>
                </div>

                <!-- Submit -->
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        @submit.prevent="handleVerification"
                        type="submit"
                        class="inline-flex 
                                justify-center 
                                rounded-md 
                                border 
                                border-transparent 
                                py-2 
                                px-4 
                                text-sm 
                                font-medium 
                                shadow-sm 
                                focus:outline-none
                                bg-black 
                                hover:bg-gray-600 
                                text-white"
                    >
                        Verify
                    </button>
                </div>

            </div>

        </form>

    </div>

</template>

<script setup>

    import { vMaska } from 'maska';
    import { reactive, ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios'

    const router = useRouter()

    const credentials = reactive({
        phone: null,
        login_code: null,
    });

    const waitingOnVerification = ref(false)

    onMounted(() => {
        if (localStorage.getItem('token')) {
            router.push({
                name: 'landing',
            })
        }
    })

    const getFormattedCredentials = () => {
        return {
            phone: credentials.phone.replaceAll(' ', '').replace('(', '').replace(')', '').replace('-', ''),
            login_code: credentials.login_code,
        }
    }

    const handleLogin = () => {
        axios.post('http://localhost:8000/api/login', getFormattedCredentials())
            .then((response) => {
                console.log(response.data);
                waitingOnVerification.value = true;
            })
            .catch((error) => {
                console.error(error);
                alert(error.response.data.message);
            })
    };


    const handleVerification = () => {
        axios.post('http://localhost:8000/api/login/verify', getFormattedCredentials())
            .then((response) => {
                console.log(response.data); // Auth token is returned
                localStorage.setItem('token', response.data);
                router.push({
                    name: 'landing',
                });
            })
            .catch((error) => {
                console.error(error)
                alert(error.response.data.message)
            })
    }

</script>

<style>

</style>
