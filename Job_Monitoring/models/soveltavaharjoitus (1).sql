-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 13.12.2020 klo 21:38
-- Palvelimen versio: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soveltavaharjoitus`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `tunnukset`
--

CREATE TABLE `tunnukset` (
  `id` int(11) NOT NULL,
  `tunnus` text COLLATE utf8_swedish_ci NOT NULL,
  `salasana` text COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Vedos taulusta `tunnukset`
--

INSERT INTO `tunnukset` (`id`, `tunnus`, `salasana`) VALUES
(1, 'aatu', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'),
(2, 'jenni', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');

-- --------------------------------------------------------

--
-- Rakenne taululle `tyot`
--

CREATE TABLE `tyot` (
  `id` int(11) NOT NULL,
  `tyontekijaid` int(11) NOT NULL,
  `tyotehtavat` text COLLATE utf8_swedish_ci NOT NULL,
  `tunnit` text COLLATE utf8_swedish_ci NOT NULL,
  `pvm` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Vedos taulusta `tyot`
--

INSERT INTO `tyot` (`id`, `tyontekijaid`, `tyotehtavat`, `tunnit`, `pvm`) VALUES
(1, 1, 'Rekan tyhkentäminen', '2', '0000-00-00 00:00:00'),
(2, 1, 'Laatikoiden lajittelu ', '1.5', '0000-00-00 00:00:00'),
(3, 1, 'Rahdin lastaus', '0,5', '0000-00-00 00:00:00'),
(4, 1, 'asd', 'asd', '0000-00-00 00:00:00'),
(5, 1, 'asd', 'asd', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tunnukset`
--
ALTER TABLE `tunnukset`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tyot`
--
ALTER TABLE `tyot`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tunnukset`
--
ALTER TABLE `tunnukset`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tyot`
--
ALTER TABLE `tyot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
