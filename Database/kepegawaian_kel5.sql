-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Jun 2024 pada 10.20
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kepegawaian_kel5`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_keterampilan`
--

CREATE TABLE `detail_keterampilan` (
  `id_detail_keterampilan` int(11) NOT NULL,
  `kd_keterampilan` int(11) NOT NULL,
  `id_pelamar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `detail_keterampilan`
--

INSERT INTO `detail_keterampilan` (`id_detail_keterampilan`, `kd_keterampilan`, `id_pelamar`) VALUES
(1, 4, 1),
(2, 3, 1),
(3, 1, 1),
(4, 4, 2),
(5, 5, 2),
(6, 2, 2),
(7, 7, 3),
(8, 8, 3),
(9, 3, 3),
(10, 3, 4),
(11, 1, 4),
(12, 2, 4),
(13, 1, 5),
(14, 2, 5),
(15, 6, 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `jenis_kelamin`
--

CREATE TABLE `jenis_kelamin` (
  `jenis_kelamin_pelamar` char(1) NOT NULL,
  `nama_jenis_kelamin` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `jenis_kelamin`
--

INSERT INTO `jenis_kelamin` (`jenis_kelamin_pelamar`, `nama_jenis_kelamin`) VALUES
('L', 'Laki-laki'),
('P', 'Perempuan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `keterampilan`
--

CREATE TABLE `keterampilan` (
  `kd_keterampilan` int(11) NOT NULL,
  `nama_keterampilan` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `keterampilan`
--

INSERT INTO `keterampilan` (`kd_keterampilan`, `nama_keterampilan`) VALUES
(1, 'Python'),
(2, 'C++'),
(3, 'JavaScript'),
(4, 'SQL'),
(5, 'UML'),
(6, 'R'),
(7, 'HTML'),
(8, 'CSS');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pelamar`
--

CREATE TABLE `pelamar` (
  `id_pelamar` int(11) NOT NULL,
  `nama_pelamar` varchar(255) NOT NULL,
  `jenis_kelamin_pelamar` char(1) NOT NULL,
  `alamat_pelamar` varchar(255) NOT NULL,
  `email_pelamar` varchar(255) NOT NULL,
  `no_telpon_pelamar` varchar(255) NOT NULL,
  `kd_pendidikan` int(11) NOT NULL,
  `pengalaman_pelamar` varchar(255) NOT NULL,
  `tanggal_lamar` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pelamar`
--

INSERT INTO `pelamar` (`id_pelamar`, `nama_pelamar`, `jenis_kelamin_pelamar`, `alamat_pelamar`, `email_pelamar`, `no_telpon_pelamar`, `kd_pendidikan`, `pengalaman_pelamar`, `tanggal_lamar`) VALUES
(1, 'Andi Setiawan', 'L', 'Jl. Merdeka No. 10, Jakarta', 'andi.setiawan@gmail.com', '(+62)81234567890', 1, '2 tahun sebagai Database Administrator', '2024-06-09 10:03:05'),
(2, 'Budi Santoso', 'L', 'Jl. Pahlawan No. 20, Bandung', 'budi.santoso@gmail.com', '(+62)81234567891', 2, '2 tahun sebagai System Analyst', '2024-06-09 10:06:50'),
(3, 'Citra Lestari', 'P', 'Jl. Melati No. 40, Yogyakarta', 'citra.lestari@gmail.com', '(+62)81234567892', 1, '1 tahun sebagai Web Developer', '2024-06-09 10:08:37'),
(4, 'Dewi Rahmawati', 'P', 'Jl. Melati No. 40, Yogyakarta', 'dewi.rahmawati@gmail.com', '(+62)81234567893', 3, '3 tahun sebagai Software Developer', '2024-06-09 10:10:06'),
(5, 'Eko Prasetyo', 'L', 'Jl. Kenanga No. 50, Semarang', 'eko.prasetyo@gmail.com', '(+62)81234567894', 1, '2 tahun sebagai Data Analyst', '2024-06-08 13:11:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pendidikan`
--

CREATE TABLE `pendidikan` (
  `kd_pendidikan` int(11) NOT NULL,
  `nama_pendidikan` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pendidikan`
--

INSERT INTO `pendidikan` (`kd_pendidikan`, `nama_pendidikan`) VALUES
(1, 'S1 Teknik Informatik'),
(2, 'S1 Sistem Informasi'),
(3, 'S1 Ilmu Komputer');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `detail_keterampilan`
--
ALTER TABLE `detail_keterampilan`
  ADD PRIMARY KEY (`id_detail_keterampilan`),
  ADD KEY `kd_keterampilan` (`kd_keterampilan`),
  ADD KEY `id_pelamar` (`id_pelamar`);

--
-- Indeks untuk tabel `jenis_kelamin`
--
ALTER TABLE `jenis_kelamin`
  ADD PRIMARY KEY (`jenis_kelamin_pelamar`);

--
-- Indeks untuk tabel `keterampilan`
--
ALTER TABLE `keterampilan`
  ADD PRIMARY KEY (`kd_keterampilan`);

--
-- Indeks untuk tabel `pelamar`
--
ALTER TABLE `pelamar`
  ADD PRIMARY KEY (`id_pelamar`),
  ADD KEY `jenis_kelamin_pelamar` (`jenis_kelamin_pelamar`),
  ADD KEY `kd_pendidikan` (`kd_pendidikan`);

--
-- Indeks untuk tabel `pendidikan`
--
ALTER TABLE `pendidikan`
  ADD PRIMARY KEY (`kd_pendidikan`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `detail_keterampilan`
--
ALTER TABLE `detail_keterampilan`
  MODIFY `id_detail_keterampilan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `keterampilan`
--
ALTER TABLE `keterampilan`
  MODIFY `kd_keterampilan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `pelamar`
--
ALTER TABLE `pelamar`
  MODIFY `id_pelamar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT untuk tabel `pendidikan`
--
ALTER TABLE `pendidikan`
  MODIFY `kd_pendidikan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `detail_keterampilan`
--
ALTER TABLE `detail_keterampilan`
  ADD CONSTRAINT `detail_keterampilan_ibfk_1` FOREIGN KEY (`kd_keterampilan`) REFERENCES `keterampilan` (`kd_keterampilan`),
  ADD CONSTRAINT `detail_keterampilan_ibfk_2` FOREIGN KEY (`id_pelamar`) REFERENCES `pelamar` (`id_pelamar`);

--
-- Ketidakleluasaan untuk tabel `pelamar`
--
ALTER TABLE `pelamar`
  ADD CONSTRAINT `pelamar_ibfk_1` FOREIGN KEY (`jenis_kelamin_pelamar`) REFERENCES `jenis_kelamin` (`jenis_kelamin_pelamar`),
  ADD CONSTRAINT `pelamar_ibfk_2` FOREIGN KEY (`kd_pendidikan`) REFERENCES `pendidikan` (`kd_pendidikan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
