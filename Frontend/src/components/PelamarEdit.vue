<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 class="text-xl font-bold mb-4">Edit Pelamar</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label for="nama" class="block text-sm font-medium text-gray-700">Nama Pelamar</label>
                    <input v-model="form.nama_pelamar" id="nama" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                    <label for="jenis_kelamin" class="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                    <input v-model="form.jenis_kelamin_pelamar" id="jenis_kelamin" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                    <label for="alamat" class="block text-sm font-medium text-gray-700">Alamat</label>
                    <input v-model="form.alamat_pelamar" id="alamat" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="form.email_pelamar" id="email" type="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                    <label for="no_telpon" class="block text-sm font-medium text-gray-700">No Telpon</label>
                    <input v-model="form.no_telpon_pelamar" id="no_telpon" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                    <label for="pendidikan" class="block text-sm font-medium text-gray-700">Pendidikan</label>
                    <input v-model="form.kd_pendidikan" id="pendidikan" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                    <label for="pengalaman" class="block text-sm font-medium text-gray-700">Pengalaman</label>
                    <input v-model="form.pengalaman_pelamar" id="pengalaman" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                    <label for="tanggal_lamar" class="block text-sm font-medium text-gray-700">Tanggal Lamar</label>
                    <input v-model="form.tanggal_lamar" id="tanggal_lamar" type="datetime-local" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="flex justify-end">
                    <button type="button" @click="$emit('close')" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Batal</button>
                    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        pelamar: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            form: { ...this.pelamar }
        };
    },
    watch: {
        pelamar(newValue) {
            console.log('New Pelamar Data:', newValue);
            this.form = { ...newValue };
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        async submitForm() {
            console.log('Data yang di edit akan dikirim', this.form);
            if (!this.form.id_pelamar) {
                console.error('id_pelamar tidak diketahui');
                return;
            }
            try {
                const response = await axios.patch(`http://localhost:4000/Pelamar/${this.form.id_pelamar}`, this.form);
                console.log('Data berhasil diedit!', response);
                this.close();
                this.$emit('refresh');
                window.location.reload();
            } catch (error) {
                console.error('Gagal mengedit data', error);
            }
        }
    }
}
</script>