<?php
session_start();

function getConnection() {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "scandiweb-test";
  
    // Create connection
    $conn = new mysqli( $servername, $username, $password, $dbname);
  
  
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
  
    return $conn;
  
  }

  if(isset($_POST["product_mass_delete_btn"])) {

    $conn = getConnection();
    $all_id = $_POST["delete_product_id"];
    $extract_id = implode(",", $all_id);
    echo $extract_id;

$query = "DELETE FROM student WHERE id IN($extract_id)";

$query_run = mysqli_query($con, $query);

  }


?>