<template>
    <!-- Container utama dengan flexbox -->
    <div class="flex flex-col lg:flex-row h-screen">


        <!-- SideBar -->
        <div class="flex flex-col justify-between border-e bg-white w-full lg:w-64">
            <div class="px-4 py-6">
                <span class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                    Logo
                </span>
                <ul class="mt-6 space-y-1">
                    <li>
                        <a href="#" class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                            General
                        </a>
                    </li>
                    <li>
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span class="text-sm font-medium">Teams</span>
                                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <ul class="mt-2 space-y-1 px-4">
                                <li>
                                    <a href="#" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        Banned Users
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        Calendar
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a href="#" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            Billing
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            Invoices
                        </a>
                    </li>
                    <li>
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span class="text-sm font-medium">Account</span>
                                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <ul class="mt-2 space-y-1 px-4">
                                <li>
                                    <a href="#" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        Details
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        Security
                                    </a>
                                </li>
                                <li>
                                    <form action="#">
                                        <button type="submit" class="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700">
                                            Logout
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img alt="" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" class="size-10 rounded-full object-cover" />
                    <div>
                        <p class="text-xs">
                            <strong class="block font-medium">Eric Frusciante</strong>
                            <span> eric@frusciante.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div>


        <!-- Main Content -->
        <div class="flex-1 flex flex-col bg-white">
			<!-- Header -->
			<header>
				<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
					<div class="sm:flex sm:items-center sm:justify-between">
					<div class="text-center sm:text-left">
						<h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Apoteker Area</h1>

						<p class="mt-1.5 text-sm text-gray-500">Data Apoteker</p>
					</div>
					
					<div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <input 
                        type="button" 
                        class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-blue-700   transition hover:scale-110 hover:shadow-xl focus:outline-none active:text-blue-700 border-blue-700 mr-2" 
                        value="New Data"
                        @click="openModal">
					</div>
					</div>
				</div>
			</header>
			
			<!-- Modal -->
            <ModalApotekerPost :isOpen="isModalOpen" @close="closeModal" @refresh="getPelamar" />
			
			<!-- Table -->
            <div class="flex-1 p-5">
				<div class="overflow-x-auto p-7">
					<table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
					<thead class="text-left">
						<tr>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nama Apoteker</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Alamat</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">No Telepon</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
						</tr>
					</thead>
				
					<tbody class="divide-y divide-gray-200">
						<tr v-for="apoteker in paginatedData" :key="apoteker.id">
						<td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{{ apoteker.nama_apoteker }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ apoteker.alamat_apoteker }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ apoteker.no_telp_apoteker }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ apoteker.email_apoteker }}</td>
						<td>
							<input type="button" class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-offset-slate-700  active:text-green-600 border-green-600 mr-2" value="Edit">
							<input type="button" class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-red-700 transition hover:scale-110 hover:shadow-xl focus:outline-none active:text-red-700 border-red-700 ml-2" value="Delete">
							</td>
						</tr>
					</tbody>
					</table>
				</div>
            </div>
		
            <!-- Navigasi halaman -->
            <div class="flex justify-center mt-4">
                <button 
                    :disabled="currentPage === 1" 
                    @click="changePage(currentPage - 1)"
                    class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-blue-700   transition hover:scale-110 hover:shadow-xl focus:outline-none active:text-blue-700 border-blue-700 mr-2 mb-5"
                >
                    Previous
                </button>
                <button 
                    :disabled="currentPage * itemsPerPage >= dataApoteker.length" 
                    @click="changePage(currentPage + 1)"
                    class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-blue-700   transition hover:scale-110 hover:shadow-xl focus:outline-none active:text-blue-700 border-blue-700 mb-5"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const dataPelamar = ref([]);
const isModalOpen = ref(false);
const currentPage = ref(1);
const itemsPerPage = 5;

const url = "http://localhost:4000";

const getPelamar = async () => {
    try {
        const response = await axios.get(url + "/Pelamar");
        console.log(response);
        dataApoteker.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
}

const openModal = () => {
    isModalOpen.value = true;
}

const closeModal = () => {
    isModalOpen.value = false;
}

const changePage = (page) => {
    currentPage.value = page;
}

const paginatedData = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return dataPelamar.value.slice(startIndex, endIndex);
});

onMounted(() => {
    getPelamar();
})
</script>