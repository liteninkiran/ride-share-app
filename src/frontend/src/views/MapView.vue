<template>

    <div class="pt-16">

        <!-- Heading -->
        <h1 class="text-3xl font-semibold mb-4">
            Here's your trip
        </h1>

        <!-- Main Content -->
        <div>

            <!-- Outer Container -->
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">

                <!-- Inner Container -->
                <div class="bg-white px-4 py-5 sm:p-6">

                    <!-- Map -->
                    <div>
                        <GMapMap
                            v-if="location.destination.name !== ''"
                            :zoom="11"
                            :center="location.destination.geometry"
                            ref="gMap"
                            style="width: 100%; height: 256px;">
                        </GMapMap>
                    </div>

                    <!-- Going To -->
                    <div class="mt-2">
                        <p class="text-xl">
                            Going to <strong>{{ location.destination.name }}</strong>
                        </p>
                    </div>

                </div>

                <!-- Submit -->
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        @click="handleConfirmTrip"
                        class="inline-flex
                                justify-center
                                rounded-md
                                border
                                border-transparent
                                py-2
                                px-4
                                text-sm
                                font-medium
                                focus:outline-none
                                shadow-sm
                                text-white
                                hover:bg-gray-600
                                bg-black"
                    >
                        Let's Go!
                    </button>
                </div>

            </div>

        </div>

    </div>

</template>

<script setup>
    import { useLocationStore } from '@/stores/location'

    const location = useLocationStore()

    const handleConfirmTrip = () => {
    }

</script>
