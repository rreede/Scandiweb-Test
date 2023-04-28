<?php include "config.php"?>

<?php

class DatabaseOperations {
  private $conn;

  public function __construct() {
    $databaseConnection = new DatabaseConnection();
    $this->conn = $databaseConnection->connect();
  }

  public function addToDatabase() {
    // Creating variables out of form
    $sku = mysqli_real_escape_string($this->conn, $_REQUEST['sku']);
    $name = mysqli_real_escape_string($this->conn, $_REQUEST['name']);
    $price = mysqli_real_escape_string($this->conn, $_REQUEST['price']);
    $dvdsize = mysqli_real_escape_string($this->conn, $_REQUEST['dvdsize']);
    $furniturewidth = mysqli_real_escape_string($this->conn, $_REQUEST['furniturewidth']);
    $furnitureheight = mysqli_real_escape_string($this->conn, $_REQUEST['furnitureheight']);
    $furniturelength = mysqli_real_escape_string($this->conn, $_REQUEST['furniturelength']);
    $bookweight = mysqli_real_escape_string($this->conn, $_REQUEST['bookweight']);

    $sql = "INSERT INTO products (sku, name, price, dvdsize, furniturewidth, furnitureheight, furniturelength, bookweight)
            VALUES ('$sku', '$name', '$price', '$dvdsize', '$furniturewidth', '$furnitureheight', '$furniturelength', '$bookweight')";
            
    if ($this->conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $this->conn->error;
    }
    
    header("Location: http://localhost:5173/");
    $this->conn->close();
  }

  public function deleteFromDatabase2($ids) {
      $idsCommaSeparated = implode(',', $ids);
      $sql = "DELETE FROM products
      WHERE id IN ($idsCommaSeparated);";
      return $this->conn->query($sql) === TRUE;
  }

  public function deleteFromDatabase() {
    if(isset($_POST['delete_product_id'])) {
      foreach($_POST['delete_product_id'] as $id) {
        // sql to delete a record
        $sql = "DELETE FROM products WHERE id=$id";
        
        if ($this->conn->query($sql) === TRUE) {
          echo "Record deleted successfully";
        } else {
          echo "Error deleting record: " . $this->conn->error;
        }
      }
    }
    
    header("Location: http://localhost:5173/");
    $this->conn->close();
  }
}

// Run functions

$databaseOperations = new DatabaseOperations();

if(isset($_POST['product_mass_delete_btn'])) {
  $databaseOperations->deleteFromDatabase();
}

if(isset($_POST['addProductSave'])) {
  $databaseOperations->addToDatabase();
}

?>