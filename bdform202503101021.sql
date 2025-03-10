-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10/03/2025 às 14:20
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bdform`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `formulario`
--

CREATE TABLE `formulario` (
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `assunto` varchar(100) NOT NULL,
  `mensage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `formulario`
--

INSERT INTO `formulario` (`nome`, `email`, `assunto`, `mensage`) VALUES
('Thaylan Fonseca', 'thaylan.fonseca@gmail.com', 'horarios', 'Funcionou?'),
('', '', '', ''),
('Gustavo Pereira', 'gs.pereira@gmail.com', 'ballet', 'Aula Boa'),
('', '', '', ''),
('', '', '', ''),
('Isabela Campos', 'Isa.cmpos@gmail.com', 'ballet', 'teste4'),
('Felicia Montana', 'fel.mont@gmail.com', 'jazz', 'teste5'),
('Juan Silva', 'js.silva@gmail.com', 'Hyp-Hop', 'teste6'),
('Thaylan Sergio Barros da Fonseca', 'thay.fons.@gmail.com', 'Zumba', 'Teste Final');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
