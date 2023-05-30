<?php
// Establecer la conexión con la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cursosql";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error al conectar con la base de datos: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];

// Preparar la consulta SQL para insertar los datos
$sql = "INSERT INTO USUARIO (NOMBRE, APELLIDO, EMAIL) VALUES (?, ?, ?)";

// Preparar la declaración
$stmt = $conn->prepare($sql);

// Vincular los parámetros
$stmt->bind_param("sss", $nombre, $apellido, $email);

// Ejecutar la declaración
if ($stmt->execute()) {
    echo "Datos insertados correctamente.";
} else {
    echo "Error al insertar datos: " . $stmt->error;
}

// Cerrar la declaración y la conexión con la base de datos
$stmt->close();
$conn->close();
?>
