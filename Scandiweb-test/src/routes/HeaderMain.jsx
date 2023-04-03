import { Link } from "react-router-dom";

export default function HeaderMain() {
  return (
    <header>
      <h1>Product list</h1>
      <div className="editButtons">
        <Link to="./ProductAdd">
          <button>ADD</button>
        </Link>
        <button type="submit" name="product_mass_delete_btn" id="delete-product-btn">MASS DELETE</button>
      </div>
    </header>
  );
}
