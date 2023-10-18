-- MySQL Script generated by MySQL Workbench
-- Thu Oct 12 19:25:16 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pcssgb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pcssgb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pcssgb` DEFAULT CHARACTER SET utf8 ;
USE `pcssgb` ;

-- -----------------------------------------------------
-- Table `pcssgb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pcssgb`.`categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pcssgb`.`autor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pcssgb`.`autor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NULL,
  `data_nascimento` DATE NULL,
  `foto` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pcssgb`.`serie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pcssgb`.`serie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `numero_titulos` INT NULL,
  `completude` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pcssgb`.`livro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pcssgb`.`livro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `editora` VARCHAR(45) NOT NULL,
  `ano` YEAR NOT NULL,
  `idioma` VARCHAR(45) NOT NULL,
  `nota` FLOAT NULL,
  `estado_leitura` VARCHAR(45) NOT NULL,
  `ISBN` VARCHAR(45) NOT NULL,
  `autor_id` INT NOT NULL,
  `serie_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_livro_autor1_idx` (`autor_id` ASC) VISIBLE,
  INDEX `fk_livro_serie1_idx` (`serie_id` ASC) VISIBLE,
  CONSTRAINT `fk_livro_autor1`
    FOREIGN KEY (`autor_id`)
    REFERENCES `pcssgb`.`autor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_livro_serie1`
    FOREIGN KEY (`serie_id`)
    REFERENCES `pcssgb`.`serie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pcssgb`.`livro_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pcssgb`.`livro_categoria` (
  `livro_id` INT NOT NULL,
  `categoria_id` INT NOT NULL,
  INDEX `fk_livro_categoria_livro1_idx` (`livro_id` ASC) VISIBLE,
  INDEX `fk_livro_categoria_categoria1_idx` (`categoria_id` ASC) VISIBLE,
  CONSTRAINT `fk_livro_categoria_livro1`
    FOREIGN KEY (`livro_id`)
    REFERENCES `pcssgb`.`livro` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_livro_categoria_categoria1`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `pcssgb`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;