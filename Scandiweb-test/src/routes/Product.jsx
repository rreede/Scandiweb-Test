export default function Product(props) {
  return (
    <div className="Product">
      <input type="checkbox" label="test" class="delete-checkbox" name="delete_product_id[]" id="checkbox_item" />
      <p>{props.sku}</p>
      <p>{props.name}</p>
      <p>{props.price}$</p>
    </div>
  );
}
