export default function Product(props) {
  const isDVD = props.dvdsize;
  const isBook = props.bookweight;
  const isDimension = props.furniturewidth;

  return (
    <div className="Product">
      <input
        type="checkbox"
        label="test"
        value={props.id}
        className="delete-checkbox"
        name="delete_product_id[]"
        id="checkbox_item"
      />

      <p>{props.sku}</p>
      <p>{props.name}</p>
      <p>{props.price} $</p>

      {isDVD > 0 && <p>Size: {props.dvdsize} MB</p>}

      <p>
        {isDimension > 0 && (
          <p>
            {" "}
            Dimension: {props.furniturewidth} x {props.furnitureheight} x{" "}
            {props.furniturelength}
          </p>
        )}
      </p>

      {isBook > 0 && <p>Weight: {props.bookweight}KG</p>}
    </div>
  );
}
