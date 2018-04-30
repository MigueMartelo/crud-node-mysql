-- creating the database
CREATE DATABASE crudmysql;

-- using te database;
use crudmysql;

-- CREATING A TABLE
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- TP SHOW ALL TABLES
SHOW TABLES;

-- TO DESCRIBE THE TABLE
DESCRIBE customer;