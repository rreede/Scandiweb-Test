import HeaderAddProduct from "./HeaderAddProduct";

export default function ProductAdd() {
  return (
    <div>
      <HeaderAddProduct />
<hr/>

<main>
      <form action="" id="product_form">
<div className="input_items">
        <label htmlFor="sku">SKU</label>
        <input type="text" name="" id="sku" required /> <br />
        </div>
        <div className="input_items">
        <label htmlFor="sku">Name</label>
        <input type="text" name="" id="name" required />
        </div>
        <br />
        <div className="input_items">
        <label htmlFor="sku">Price $</label>
        <input type="text" name="" id="price" required />
        </div>
        <br />
        <div className="input_items">
        <select name="Type-switcher" id="productType">
          <option value="" selected disabled>
            Type Switcher
          </option>
          <option value="">DVD</option>
          <option value="">Book</option>
          <option value="">Furniture</option>
        </select><br />
        </div>
        <div className="input_items">
        <label htmlFor="sku">Price $</label>
        <input type="text" name="" id="price" required />
        </div>
        <br />
      </form>
      <hr/>
      </main>
    </div>
  );
}
