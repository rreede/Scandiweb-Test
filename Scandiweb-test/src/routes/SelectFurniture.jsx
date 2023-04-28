export default function SelectFurniture() {
  return (
    <div>
      <label htmlFor="">Height (CM)</label>
      <input type="text" name="furnitureheight" />
      <br />
      <label htmlFor="">Width (CM)</label>
      <input type="text" name="furniturewidth" />
      <br />
      <label htmlFor="">Length (CM)</label>
      <input type="text" name="furniturelength" />
      <p>Please provide dimensions in HxWxL format.</p>
    </div>
  );
}
