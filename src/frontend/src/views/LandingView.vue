<template>

    <div class="pt-16">

        <!-- Heading -->
        <h1 class="text-3xl font-semibold mb-4">Uber</h1>

        <!-- Content -->
        <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">

            <div class="bg-white px-4 py-5 sm:p-6">

                <div class="flex justify-between">

                    <!-- Start Driving -->
                    <button
                        @click="handleStartDriving"
                        class="rounded-md
                                border
                                border-transparent
                                py-2
                                px-4
                                text-sm
                                font-medium
                                shadow-sm
                                focus:outline-none
                                text-white
                                hover:bg-gray-600
                                bg-black"
                    >
                        Start Driving
                    </button>

                    <!-- Find A Ride -->
                    <button
                        @click="handleFindARide"
                        class="rounded-md
                                border
                                border-transparent
                                py-2
                                px-4
                                text-sm
                                font-medium
                                shadow-sm
                                focus:outline-none
                                text-white
                                hover:bg-gray-600
                                bg-black"
                    >
                        Find A Ride
                    </button>

                </div>

            </div>

        </div>

    </div>

</template>

<script setup>
    // import { useRouter } from 'vue-router'
    // import http from '@/helpers/http'

    // const router = useRouter()
    // const handleStartDriving = () => {
    //     http().get('/api/driver')
    //         .then((response) => {
    //             if (response.data.driver) {
    //                 router.push({
    //                     name: 'standby'
    //                 })
    //             } else {
    //                 router.push({
    //                     name: 'driver'
    //                 })
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }
    // const handleFindARide = () => {
    //     router.push({
    //         name: 'location'
    //     })
    // }


    const handleStartDriving = () => {
    }

    const handleFindARide = () => {
    }

</script>
