<?php
// Variables de conexión a la base de datos
$servername = "localhost";
$username = "eva";
$password = "12345678";
$dbname = "nombre_base_de_datos";

// Crear conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Función para limpiar y validar los datos del formulario
function limpiarDatos($dato) {
    $dato = trim($dato);
    $dato = stripslashes($dato);
    $dato = htmlspecialchars($dato);
    return $dato;
}

// Validar y guardar los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = limpiarDatos($_POST["nombre"]);
    $apellido1 = limpiarDatos($_POST["apellido1"]);
    $apellido2 = limpiarDatos($_POST["apellido2"]);
    $email = limpiarDatos($_POST["email"]);
    $login = limpiarDatos($_POST["login"]);
    $password = limpiarDatos($_POST["password"]);

    // Validar el formato del correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("El correo electrónico no es válido.");
    }

    // Validar la longitud de la contraseña
    if (strlen($password) < 4 || strlen($password) > 8) {
        die("La contraseña debe tener entre 4 y 8 caracteres.");
    }

    // Comprobar si el correo electrónico ya está registrado
    $sql = "SELECT * FROM usuarios WHERE email = '$email'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        die("El correo electrónico ya está registrado.");
    }

    // Insertar los datos en la tabla de la base de datos
    $sql = "INSERT INTO usuarios (nombre, apellido1, apellido2, email, login, password)
            VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$login', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "Registro completado con éxito.";
    } else {
        echo "Error al registrar los datos: " . $conn->error;
    }
}

// Consultar los registros en la base de datos
$sql = "SELECT * FROM usuarios";
$result = $conn->query($sql);

// Mostrar los registros en forma de lista
if ($result->num_rows > 0) {
    echo "<h2>Lista de usuarios registrados:</h2>";
    echo "<ul>";
    while ($row = $result->fetch_assoc()) {
        echo "<li>" . $row["nombre"] . " " . $row["apellido1"] . " " . $row["apellido2"] . "</li>";
    }
    echo "</ul>";
} else {
    echo "No se encontraron usuarios registrados.";
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
