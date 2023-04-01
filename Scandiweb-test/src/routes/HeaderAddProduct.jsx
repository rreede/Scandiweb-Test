import { Link } from "react-router-dom";

export default function HeaderAddProduct() {
  return (
    <header>
      <h1>Product list</h1>
      <div className="editButtons">
        <button>Save</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </header>
  );
}
