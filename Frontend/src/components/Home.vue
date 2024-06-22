<template>
    <!-- Container utama dengan flexbox -->
    <div class="flex flex-col lg:flex-row h-screen">

        <!-- Main Content -->
        <div class="flex-1 flex flex-col bg-white">
			<!-- Header -->
			<header>
				<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
					<div class="sm:flex sm:items-center sm:justify-between">
					<div class="text-center sm:text-left">
						<h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Daftar Pelamar</h1>

						<p class="mt-1.5 text-sm text-gray-500">Data Pelamar</p>
					</div>
					
					<div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <input 
                        type="button" 
                        class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-blue-700   transition hover:scale-110 hover:shadow-xl focus:outline-none active:text-blue-700 border-blue-700 mr-2" 
                        value="Tambah Data"
                        @click="openModal">
					</div>
					</div>
				</div>
			</header>
			
			<!-- Modal -->
            <PelamarPost :isOpen="isModalOpen" @close="closeModal" @refresh="getPelamar" />
			<PelamarEdit :isOpen="isEditModalOpen" :pelamar="selectedPelamar" @close="closeEditModal" @refresh="getPelamar" />
			<PelamarDelete :isOpen="isDeleteModalOpen" :pelamar="selectedPelamar" @close="closeDeleteModal" @confirm-delete="deletePelamar" />
			
			<!-- Table -->
            <div class="flex-1 p-5">
				<div class="overflow-x-auto p-7">
					<table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
					<thead class="text-left">
						<tr>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nama Pelamar</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jenis Kelamin</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Alamat</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">No Telp</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pendidikan</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pengalaman</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tanggal Lamar</th>
						</tr>
					</thead>
				
					<tbody class="divide-y divide-gray-200">
						<tr v-for="pelamar in dataPelamar" :key="pelamar.id">
						<td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{{ pelamar.nama_pelamar }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ pelamar.jenis_kelamin_pelamar }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ pelamar.alamat_pelamar }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ pelamar.email_pelamar }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ pelamar.no_telpon_pelamar }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ pelamar.kd_pendidikan }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ pelamar.pengalaman_pelamar }}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ formatDateTime(pelamar.tanggal_lamar) }}</td>
						<td>
							<input 
                                type="button" 
                                class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-offset-slate-700  active:text-green-600 border-green-600 mr-2" 
                                value="Edit"
                                @click="openEditModal(pelamar)">
							<input 
                                type="button" 
                                class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-red-700 transition hover:scale-110 hover:shadow-xl focus:outline-none active:text-red-700 border-red-700 ml-2" 
                                value="Hapus"
								@click="openDeleteModal(pelamar)">
						</td>
						</tr>
					</tbody>
					</table>
				</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import PelamarPost from './PelamarPost.vue'
import PelamarEdit from './PelamarEdit.vue'
import PelamarDelete from './PelamarDelete.vue'

const dataPelamar = ref([]);
const isModalOpen = ref(false);
const isEditModalOpen = ref(false);
const selectedPelamar = ref(null);
const isDeleteModalOpen = ref(false);

const url = "http://localhost:4000";

const getPelamar = async () => {
    try {
        const response = await axios.get(url + "/Pelamar");
        console.log(response);
        dataPelamar.value = response.data.data;
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

const openEditModal = (pelamar) => {
    console.log('Selected Pelamar: ', pelamar);
    selectedPelamar.value = pelamar;
    isEditModalOpen.value = true;
}

const closeEditModal = () => {
    isEditModalOpen.value = false;
    selectedPelamar.value = null;
}

const openDeleteModal = (pelamar) => {
    selectedPelamar.value = pelamar;
    isDeleteModalOpen.value = true;
};

const closeDeleteModal = () => {
    isDeleteModalOpen.value = false;
    selectedApoteker.value = null;
};

const deletePelamar = async () => {
    if (!selectedPelamar.value || !selectedPelamar.value.id_pelamar) {
        console.error('ID pelamar is missing');
        return;
    }

    try {
        await axios.delete(`${url}/Pelamar/${selectedPelamar.value.id_pelamar}`);
        console.log('Data telah dihapus!');
        closeDeleteModal();
        getPelamar();
    } catch (error) {
        console.error('Gagal menghapus data', error);
    }
}

const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

onMounted(() => {
    getPelamar();
})
</script>