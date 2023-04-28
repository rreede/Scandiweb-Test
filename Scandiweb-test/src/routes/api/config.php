<?php

class DatabaseConnection {
  private $servername = "localhost";
  private $username = "root";
  private $password = "";
  private $dbname = "scandiweb-test";
  private $conn;

  public function connect() {
      // Create connection
      $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

      // Check connection
      if ($this->conn->connect_error) {
        die("Connection failed: " . $this->conn->connect_error);
      }
      echo "Connected successfully";

      return $this->conn;
  }
}



?> 