<?php

// Connect to Database

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

// GET READ Products

function getProducts() {
 
  $conn = getConnection();

  $query = "SELECT * FROM `products`;";
  $result = $conn->query($query);

  $rows = [];
  if ($result->num_rows > 0) {
  // output data of each row
    while($row = $result->fetch_assoc()) {
      $rows[] = $row;
    }
  }
  $conn->close();

  return $rows;
}





if(isset($_GET['getProducts'])) {
  $products = getProducts();
  die(json_encode($products));
}



function deleteRow($id) {
  $conn = getConnection();

  // sql to delete a record
$sql = "DELETE FROM products WHERE id=$id";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . $conn->error;
}
}


?>