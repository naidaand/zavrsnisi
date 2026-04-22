<?php
include 'db.php';

$sql = "SELECT r.id, r.user_email, s.name, r.date, r.time 
        FROM reservations r
        JOIN services s ON r.service_id = s.id";

$result = $conn->query($sql);

$data = [];

while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>