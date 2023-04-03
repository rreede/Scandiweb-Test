export default function Product(props) {
  return (
    <div className="Product">
      <input type="checkbox" label="test" name="delete_product_id[]" id="" />
      <p>{props.sku}</p>
      <p>{props.name}</p>
      <p>{props.price}$</p>
    </div>
  );
}
