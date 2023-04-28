<?php include "database.php";

class Rest {

    public function __construct() {
        $this->registerRestRoutes();
    }

    private function registerRestRoutes() {
        $this->registerDeleteRestRoute();
    }

    private function registerDeleteRestRoute() {
        if (
            isset($_POST['delete_product_id']) 
            && !empty($_POST['delete_product_id'])
            && is_array($_POST['delete_product_id'])
        ) {
            $databaseOperation = new DatabaseOperations();
            if($databaseOperation->deleteFromDatabase2($_POST['delete_product_id'])) {
                die('ids deleted sucessfully');
            }
        }
        die('something went wrong');
    }
}

$rest = new Rest();

?>