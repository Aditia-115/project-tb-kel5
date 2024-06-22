<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="bg-white p-6">
                <h2 class="text-xl font-semibold mb-4 text-black">Tambah Data Pelamar</h2>
                <form @submit.prevent="submitForm">
                    <div class="mb-4">
                        <label class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <input
                                type="text"
                                v-model="form.nama_pelamar"
                                placeholder="Nama Pelamar"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700"
                                required
                            />
                            <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                Nama Pelamar
                            </span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <label class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <input
                                type="text"
                                v-model="form.jenis_kelamin_pelamar"
                                placeholder="Jenis Kelamin"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700"
                                required
                            />
                            <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                Jenis Kelamin
                            </span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <label class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <input
                                type="text"
                                v-model="form.alamat_pelamar"
                                placeholder="Alamat"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700"
                                required
                            />
                            <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                Alamat
                            </span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <label class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <input
                                type="email"
                                v-model="form.email_pelamar"
                                placeholder="Email"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700"
                                required
                            />
                            <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                Email
                            </span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <label class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <input
                                type="text"
                                v-model="form.no_telpon_pelamar"
                                placeholder="No Telpon"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700"
                                required
                            />
                            <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                No Telpon
                            </span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <label class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <input
                                type="text"
                                v-model="form.kd_pendidikan"
                                placeholder="Pendidikan"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700"
                                required
                            />
                            <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                Pendidikan
                            </span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <label class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <input
                                type="text"
                                v-model="form.pengalaman_pelamar"
                                placeholder="Pengalaman"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700"
                                required
                            />
                            <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                Pengalaman
                            </span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <label class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <input
                                type="datetime-local"
                                v-model="form.tanggal_lamar"
                                placeholder="Tanggal Lamar"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700"
                                required
                            />
                            <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                Tanggal Lamar
                            </span>
                        </label>
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="close" class="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded">Batal</button>
                        <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded">Tambah</button>
                    </div>
                </form>
            </div>
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
        }
    },
    data() {
        return {
            form: {
                nama_pelamar: '',
                jenis_kelamin_pelamar: '',
                alamat_pelamar: '',
                email_pelamar: '',
                no_telpon_pelamar: '',
                kd_pendidikan: '',
                pengalaman_pelamar: '',
                tanggal_lamar: ''
            }
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        async submitForm() {
            console.log('Data yang akan dikirim', this.form);
            try {
                const response = await axios.post('http://localhost:4000/Pelamar', this.form);
                console.log('Data berhasil ditambahkan!', response);
                // this.resetForm();
                this.close();
                this.$emit('refresh');
                window.location.reload(); 
            } catch (error) {
                console.error('Gagal menambahkan data', error);
            }
        }
    }
}
</script>
