export function SearchField({ setProductName, productName }) {
  function handleOnChangeSearch(e) {
    setProductName(e.target.value);
  }

  return (
    <div className="container">
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="inputPassword6" className="col-form-label">
            Vyhledat produkt
          </label>
        </div>
        <div className="col-auto">
          <input
            onChange={(e) => handleOnChangeSearch(e)}
            type="text"
            placeholder="zadejte název produktu"
            value={productName}
            className="form-control"
          ></input>{" "}
        </div>
        <div className="col-auto">
          <span className="form-text">Vyhledávání podle názvu produktu.</span>
        </div>
      </div>
    </div>
  );
}
