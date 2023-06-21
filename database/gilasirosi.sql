-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 28, 2023 at 08:51 AM
-- Server version: 5.6.20-log
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gilasirosi`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE IF NOT EXISTS `barang` (
`bar_id` int(10) NOT NULL,
  `bar_nama` varchar(50) DEFAULT NULL,
  `bar_kategori` varchar(30) DEFAULT NULL,
  `bar_deskripsi` varchar(50) DEFAULT NULL,
  `bar_harga` decimal(20,2) DEFAULT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`bar_id`, `bar_nama`, `bar_kategori`, `bar_deskripsi`, `bar_harga`) VALUES
(1, 'Stick Jahe', 'Makanan', 'Enak Sekali', '5000.00'),
(2, 'Bros Dagu', 'Kerajinan', 'Buatan Tangan', '25000.00'),
(3, 'Es Buah Naga', 'Minuman', 'Menyegarkan', '10000.00'),
(4, 'Es Teh Nangka', 'Minuman', 'Menunda haus', '5000.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
 ADD PRIMARY KEY (`bar_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
MODIFY `bar_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
