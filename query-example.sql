DROP TABLE IF EXISTS pedido, cliente CASCADE;

CREATE TABLE cliente (
    cliente_id SERIAL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(12)
);

CREATE TABLE pedido (
    pedido_id SERIAL PRIMARY KEY,
    cliente_id INT NOT NULL,
    fecha DATE NOT NULL,
    total DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id)
);
INSERT INTO cliente (nombre, apellido, email, telefono)
VALUES ('Ana', 'Garcia', 'ana@gmail.com', '611111111');

INSERT INTO cliente (nombre, apellido, email, telefono)
VALUES ('Luis', 'Martinez', 'luis@gmail.com', '622222222');

INSERT INTO cliente (nombre, apellido, email, telefono)
VALUES ('Marta', 'Lopez', 'marta@gmail.com', '633333333');

INSERT INTO pedido (cliente_id, fecha, total)
VALUES (1, '2026-05-25', 49.99);

INSERT INTO pedido (cliente_id, fecha, total)
VALUES (2, '2026-05-21', 120.50);

INSERT INTO pedido (cliente_id, fecha, total)
VALUES (3, '2026-05-22', 15.75);

SELECT * FROM cliente;

SELECT nombre, email FROM cliente;

SELECT * FROM cliente
WHERE nombre = 'inigo';

SELECT * FROM cliente
ORDER BY nombre ASC;