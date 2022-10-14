CREATE DATABASE teletubbiesdb;

USE teletubbiesdb;

CREATE TABLE usuario (
    id Int(11) NOT NULL AUTO_INCREMENT,
    nombre VarChar(45),
    apellido VarChar(45),
    correo TEXT(45),
    password TEXT(45),
    PRIMARY KEY (id)
);

DESCRIBE usuario;

INSERT INTO usuario VALUES
    (1, 'Maria', 'Perez', 'mariaPerez@gmail.com', 'mperez123'),
    (2, 'Juan', 'Gomez', 'juanGomez@gmail.com', 'jgomez123'),
    (3, 'Pedro', 'Suarez', 'pedrosuarez@gmail.com', 'psuarez123'),
    (4, 'Luis', 'Paredes', 'luisparedes@gmail.com', 'lparedes123'),
    (5, 'Ana', 'Gonzalez', 'anagonzalez@gmail.com', 'agonzalez123'),
    (6, 'Lois', 'Fernandez', 'loisfernandez@gmail.com', 'lfernandez123'),
    (7, 'Adriana', 'Garcia', 'adrianagarcia@gmail.com', 'agarcia123'),
    (8, 'Luisa', 'Martinez', 'lmartinez@gmail.com', 'lmartinez123'),
    (9, 'Andrea', 'Villa', 'andreavilla@gmail.com', 'avilla123'),
    (10, 'Denys', 'Diaz', 'denysdiaz@gmail.com', 'ddiaz123');

