import { Link } from "react-router-dom";

export default function HeaderMain() {
  /*
function deleteProduct {

  const [delete, deleteProducts] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:80/Scandiweb-Test/Scandiweb-test/src/routes/api/api.php?getProducts",
      {
        method: "GET",
        crossorigin: true,
      }
    )
      .then((response) => response.json())
      // .then(response => console.log(response))
      .then(setProducts);
  }, []);


}

*/

  return (
    <header>
      <h1>Product list</h1>
      <div className="editButtons">
        <Link to="./ProductAdd">
          <button>ADD</button>
        </Link>
        <input
          type="submit"
          value="MASS DELETE"
          name="product_mass_delete_btn"
          id="delete-product-btn"
          /*  onClick={deleteProduct}*/
        ></input>
      </div>
    </header>
  );
}
