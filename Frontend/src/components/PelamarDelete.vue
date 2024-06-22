<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="bg-white p-6">
                <h2 class="text-xl font-semibold mb-4 text-black">Hapus Data Pelamar</h2>
                <p class="text-sm font-semibold text-gray-800 mb-5">Apakah Anda yakin ingin menghapus pelamar berikut?</p>
                <div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                    <dl class="-my-3 divide-y divide-gray-100 text-sm">
                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Nama Pelamar</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ pelamar.nama_pelamar }}</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Jenis Kelamin</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ pelamar.jenis_kelamin_pelamar }}</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Alamat</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ pelamar.alamat_pelamar }}</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Email</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ pelamar.email_pelamar }}</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">No Telpon</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ pelamar.no_telpon_pelamar }}</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Pendidikan</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ pelamar.kd_pendidikan }}</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Pengalaman</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ pelamar.pengalaman_pelamar }}</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Tanggal Lamar</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ pelamar.tanggal_lamar }}</dd>
                            </div>
                        </dl>
                    </div>
                <div class="flex justify-end mt-4">
                    <button type="button" @click="close" class="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded">Batal</button>
                    <button type="button" @click="confirmDelete" class="px-4 py-2 bg-red-600 text-white rounded">Hapus</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    methods: {
        close() {
            this.$emit('close');
        },
        confirmDelete() {
            this.$emit('confirm-delete');
        }
    }
}
</script>
