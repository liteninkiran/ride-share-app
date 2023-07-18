<template>

    <div class="pt-16">

        <!-- Heading -->
        <h1 class="text-3xl font-semibold mb-4">
            Enter your phone number
        </h1>

        <!-- Form -->
        <form action="#">

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
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="1 (234) 567-8910"
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

    </div>

</template>

<script setup>

</script>

<style>

</style>
