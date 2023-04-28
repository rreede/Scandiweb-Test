import { Link } from "react-router-dom";

export default function HeaderAddProduct() {
  return (
    <header>
      <h1>Product list</h1>
      <div className="editButtons">
        <input
          type="submit"
          name="addProductSave"
          id="save-product-btn"
          value="SAVE"
        ></input>
        <Link to="/">
          <button class="cancel_btn">CANCEL</button>
        </Link>
      </div>
    </header>
  );
}
