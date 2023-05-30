CREATE TABLE USUARIO (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOMBRE VARCHAR(20),
    APELLIDO VARCHAR(20),
    EMAIL VARCHAR(20)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO USUARIO (NOMBRE, APELLIDO, EMAIL) VALUES
    ('John', 'Doe', 'john.doe@example.com'),
    ('Jane', 'Smith', 'jane.smith@example.com'),
    ('Michael', 'Johnson', 'michael.johnson@example.com'),
    ('Emily', 'Davis', 'emily.davis@example.com'),
    ('David', 'Wilson', 'david.wilson@example.com'),
    ('Sarah', 'Anderson', 'sarah.anderson@example.com');
