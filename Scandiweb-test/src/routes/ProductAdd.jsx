import HeaderAddProduct from "./HeaderAddProduct";

export default function ProductAdd() {
  return (
    <div>
      <HeaderAddProduct />

      <form action="" id="product_form">
        <label htmlFor="sku">SKU</label>
        <input type="text" name="" id="sku" required /> <br />
        <label htmlFor="sku">Name</label>
        <input type="text" name="" id="name" required />
        <br />
        <label htmlFor="sku">Price $</label>
        <input type="text" name="" id="price" required />
        <br />
        <select name="Type-switcher" id="productType">
          <option value="" selected>
            Type Switcher
          </option>
          <option value="">DVD</option>
          <option value="">Book</option>
          <option value="">Furniture</option>
        </select>
      </form>
    </div>
  );
}
