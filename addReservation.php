<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$service = $data['service'];
$date = $data['date'];
$time = $data['time'];

$sql = "INSERT INTO reservations (email, service, date, time)
        VALUES ('$email', '$service', '$date', '$time')";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}
?>