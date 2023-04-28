import { useEffect, useState } from "react";

import HeaderAddProduct from "./HeaderAddProduct";

import SelectDVD from "./SelectDVD";
import SelectBook from "./SelectBook";
import SelectFurniture from "./SelectFurniture";

export default function ProductAdd() {
  const [productType, setProductType] = useState("Select Dream Car");

  const [dvdContentVisible, setDvdContentVisible] = useState(false);

  const [bookContentVisible, setBookContentVisible] = useState(false);

  const [furnitureContentVisible, setFurnitureContentVisible] = useState(false);

  useEffect(() => {
    productType === "dvd"
      ? setDvdContentVisible(true)
      : setDvdContentVisible(false);
    productType === "furniture"
      ? setFurnitureContentVisible(true)
      : setFurnitureContentVisible(false);
    productType === "book"
      ? setBookContentVisible(true)
      : setBookContentVisible(false);
  });

  const handleOnChange = (e) => {
    setProductType(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "selectDreamCar"
      ? (result = "Select your Dream Car")
      : (result = makeFirstLetterCapital(car));
    return result;
  };

  return (
    <div>
      <form
        action="http://localhost/Scandiweb-test/Scandiweb-test/src/routes/api/database.php"
        id="product_form"
        method="post"
      >
        <HeaderAddProduct />
        <hr />

        <main>
          <div className="input_items">
            <label htmlFor="sku">SKU</label>
            <input type="text" name="sku" id="sku" required /> <br />
          </div>
          <div className="input_items">
            <label htmlFor="sku">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <br />
          <div className="input_items">
            <label htmlFor="sku">Price $</label>
            <input type="text" name="price" id="price" required />
          </div>
          <br />
          <div className="input_items">
            <select
              name="Type-switcher"
              id="productType"
              value={productType}
              onChange={handleOnChange}
            >
              <option value="Type Selection" default>
                Type Selection
              </option>
              <option value="dvd">DVD</option>
              <option value="book">Book</option>
              <option value="furniture">Furniture</option>
            </select>
            <br />
          </div>
          <div className="input_items"></div>
          <br />

          {dvdContentVisible && <SelectDVD />}
          {furnitureContentVisible && <SelectFurniture />}
          {bookContentVisible && <SelectBook />}

          <hr />
        </main>
      </form>
    </div>
  );
}
