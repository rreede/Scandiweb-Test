import { Link } from "react-router-dom";

export default function HeaderMain() {
  return (
    <header>
      <h1>Product list</h1>
      <div className="editButtons">
        <Link to="./ProductAdd">
          <button>ADD</button>
        </Link>
        <button id="delete-product-btn">MASS DELETE</button>
      </div>
    </header>
  );
}
