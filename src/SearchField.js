export function SearchField({ setProductName, productName }) {
  function handleOnChangeSearch(e) {
    setProductName(e.target.value);
  }

  return (
    <div>
      <label>
        <h1>Vyhledat produkt</h1>
      </label>
      <input
        onChange={(e) => handleOnChangeSearch(e)}
        type="text"
        placeholder="zadejte název produktu"
        value={productName}
      ></input>
    </div>
  );
}
