-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 22, 2023 at 06:01 AM
-- Server version: 5.6.20-log
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gila_sample`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE IF NOT EXISTS `barang` (
  `barang_id` int(5) NOT NULL,
  `barang_nama` varchar(50) NOT NULL,
  `barang_pirt` varchar(20) NOT NULL,
  `barang_harga` decimal(10,2) NOT NULL,
  `barang_deskripsi` varchar(100) NOT NULL,
  `barang_foto` varchar(100) NOT NULL,
  `barang_link` varchar(100) NOT NULL,
  `kategori_id` int(5) DEFAULT NULL,
  `UMKM_id` int(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`barang_id`, `barang_nama`, `barang_pirt`, `barang_harga`, `barang_deskripsi`, `barang_foto`, `barang_link`, `kategori_id`, `UMKM_id`) VALUES
(2, 'Albanna Egg Roll', '', '30000.00', 'Albanna Egroll', 'foto', 'https://gilasirosi.banyumaskab.go.id/ALBANNA_EGG_ROLLS_31', 2, 2),
(3, ' Keripik Pare Mak Cinov Keripik Pare Mak Cinov ', '5063302012715-25', '18500.00', 'Adalah Keripik Pare, yang terbuat dari olahan sayur pare dan tepung Mokaf', 'foto', 'https://gilasirosi.banyumaskab.go.id/Keripik_Pare_Mak_Cinov_35', 2, 3),
(1, 'Stick Jahe', ' 5053302030036-27 ', '16000.00', 'Stik jahe makanan ringan', 'foto', 'https://gilasirosi.banyumaskab.go.id/Stick_Jahe_16', 2, 1),
(4, 'Nasi liwet ayam bakar Sambel galak', '-', '17000.00', 'Nasi luwet  dengan rempah tradisional  di bungkus dengan daun pisang', 'foto', 'https://api.whatsapp.com/send/?phone=%2B6281327776080&text&app_absent=0', 2, 4),
(5, 'Rengginang Poniah', '2113302010062-27', '15000.00', 'Salah satu produk olahan yang terbuat dari aci singkong pilihan yang diolah secara tradisional', 'foto', 'https://gilasirosi.banyumaskab.go.id/RENGGINANG_PONIAH_41', 2, 5),
(6, 'Tas Rajut', '-', '350000.00', 'Tas rajut ukuran 30 x 10 x 25', 'foto', 'https://gilasirosi.banyumaskab.go.id/Tas_Rajut_by_Rusmy_Rose_Collection_127', 4, 6),
(7, 'Home dekor (customize)', '-', '55000.00', 'adikan rumahmu lebih cantik dengan pajangan dinding yang astetik sehingga rumah lebih indah', 'foto', 'https://gilasirosi.banyumaskab.go.id/Home_dekor_customize_by_teraskayupwt_136', 4, 6),
(8, 'Bros dagu Safitri', '-', '5000.00', 'Telp.085743110545', 'foto', 'https://gilasirosi.banyumaskab.go.id/Bros_dagu_Safitri_161', 4, 7),
(9, 'Buket pengantin', '-', '150000.00', 'Terbuat dari pita santen difungsikan untuk kegiatan wadding bilamana dapat lembaran bunga ini', 'foto', 'https://api.whatsapp.com/message/SHRUWKUMJGC2G1?autoload=1&app_absent=0', 4, 8),
(10, 'Estu Juice', '-', '2000.00', 'Aneka Juice', 'foto', 'https://gilasirosi.banyumaskab.go.id/Estu_Juice_182', 3, 9);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE IF NOT EXISTS `kategori` (
`kategori_id` int(5) NOT NULL,
  `kategori_nama` varchar(50) NOT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`kategori_id`, `kategori_nama`) VALUES
(1, 'Jasa'),
(2, 'Makanan'),
(3, 'Minuman'),
(4, 'Kerajinan');

-- --------------------------------------------------------

--
-- Table structure for table `kecamatan`
--

CREATE TABLE IF NOT EXISTS `kecamatan` (
`kecamatan_id` int(5) NOT NULL,
  `kecamatan_nama` varchar(50) NOT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `kecamatan`
--

INSERT INTO `kecamatan` (`kecamatan_id`, `kecamatan_nama`) VALUES
(1, 'Ajibarang'),
(2, 'Banyumas'),
(3, 'Baturraden'),
(4, 'Cilongok'),
(5, 'Gumelar'),
(6, 'Jatilawang'),
(7, 'Kalibagor'),
(8, 'Karang Lewas'),
(9, 'Kebasen'),
(10, 'Kedung Banteng'),
(11, 'Kembaran'),
(12, 'Kemranjen'),
(13, 'Lumbir'),
(14, 'Patikraja'),
(15, 'Pekuncen'),
(16, 'Purwojati'),
(17, 'Purwokerto Barat'),
(18, 'Purwokerto Selatan'),
(19, 'Purwokerto Timur'),
(20, 'Purwokerto Utara'),
(21, 'Rawalo'),
(22, 'Sokaraja'),
(23, 'Somagede'),
(24, 'Sumbang'),
(25, 'Sumpiuh'),
(26, 'Tambak'),
(27, 'Wangon');

-- --------------------------------------------------------

--
-- Table structure for table `umkm`
--

CREATE TABLE IF NOT EXISTS `umkm` (
`UMKM_id` int(5) NOT NULL,
  `UMKM_nama` varchar(50) NOT NULL,
  `UMKM_alamat` varchar(100) NOT NULL,
  `UMKM_telp` char(20) NOT NULL,
  `kecamatan_id` int(5) NOT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `umkm`
--

INSERT INTO `umkm` (`UMKM_id`, `UMKM_nama`, `UMKM_alamat`, `UMKM_telp`, `kecamatan_id`) VALUES
(1, 'Suyati', 'Dawuhan wetan', '081227584321', 10),
(2, ' Albanna ', 'Klapagading kulon rt 3/15 ', '085799246665', 27),
(3, 'Rumah Novanda', 'Desa Legok RT 01 RW 1 Pekuncen', '085726291292', 15),
(4, 'Sumargono', 'Klapagading Rt 04 Rw 03', '081327776080', 27),
(5, 'Rengginang Poniah', 'GUNUNGWETAN RT.001 RW.004', '082192559756', 6),
(6, 'Candu Store', 'Desa karangsalam Lor', '087836341179', 3),
(7, 'Samiati', 'Gembrong RT 03 RW 01 rawaheng', ' 085743110545', 27),
(8, 'Mosse craft', 'Prembun Tambak', '081391019855', 26),
(9, 'Estu Juice Fresh', 'GENTAWANGI RT 04/02', '085227812378', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
 ADD PRIMARY KEY (`barang_id`), ADD KEY `kategori_id` (`kategori_id`), ADD KEY `UMKM_id` (`UMKM_id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
 ADD PRIMARY KEY (`kategori_id`);

--
-- Indexes for table `kecamatan`
--
ALTER TABLE `kecamatan`
 ADD PRIMARY KEY (`kecamatan_id`);

--
-- Indexes for table `umkm`
--
ALTER TABLE `umkm`
 ADD PRIMARY KEY (`UMKM_id`), ADD KEY `kecamatan_id` (`kecamatan_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
MODIFY `kategori_id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `kecamatan`
--
ALTER TABLE `kecamatan`
MODIFY `kecamatan_id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `umkm`
--
ALTER TABLE `umkm`
MODIFY `UMKM_id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
