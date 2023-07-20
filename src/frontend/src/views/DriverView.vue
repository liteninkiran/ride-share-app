<template>

    <div class="pt-16">

        <!-- Heading -->
        <h1 class="text-3xl font-semibold mb-4">
            Driver and car details
        </h1>

        <!-- Main Content -->
        <form action="#" @submit.prevent="handleSaveDriver">

            <!-- Outer Container -->
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">

                <!-- Inner Container -->
                <div class="bg-white px-4 py-5 sm:p-6">

                    <!-- Full Name -->
                    <div>
                        <input :class="inputClass" type="text" name="name" id="name" v-model="driverDetails.name" placeholder="Full Name">
                    </div>

                    <!-- Year -->
                    <div class="mt-2">
                        <input :class="inputClass" type="number" name="year" id="year" v-model="driverDetails.year" placeholder="Car Year">
                    </div>

                    <!-- Make -->
                    <div class="mt-2">
                        <input :class="inputClass" type="text" name="make" id="make" v-model="driverDetails.make" placeholder="Make">
                    </div>

                    <!-- Model -->
                    <div class="mt-2">
                        <input :class="inputClass" type="text" name="model" id="model" v-model="driverDetails.model" placeholder="Model">
                    </div>

                    <!-- Colour -->
                    <div class="mt-2">
                        <input :class="inputClass" type="text" name="colour" id="colour" v-model="driverDetails.colour" placeholder="Colour">
                    </div>

                    <!-- License Plate -->
                    <div class="mt-2">
                        <input :class="inputClass" type="text" name="license_plate" v-model="driverDetails.license_plate" id="license_plate" placeholder="License Plate #">
                    </div>
                </div>

                <!-- Submit -->
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" @click.prevent="handleSaveDriver" :class="submitClass">
                        Continue
                    </button>
                </div>

            </div>

        </form>

    </div>

</template>

<script setup>
    import { reactive } from 'vue';
    import http from '@/helpers/http';
    import router from '../router';

    const inputClass = 'mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none';
    const submitClass = 'inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium focus:outline-none shadow-sm text-white bg-black hover:bg-gray-600';

    const driverDetails = reactive({
        name: '',
        year: null,
        make: '',
        model: '',
        color: '',
        license_plate: '',
    });

    const handleSaveDriver = () => {
        http().post('/api/driver', driverDetails)
            .then((response) => {
                router.push({
                    name: 'standby',
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };
</script>
