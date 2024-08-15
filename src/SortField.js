export function SortField({
  originCountry,
  setOriginCountry,
  coffeeTypeFilterValue,
  setCoffeeTypeFilterValue,
  setCurrency,
  currency,
  sortPrice,
  setSortPrice,
}) {
  return (
    <div>
      <br />
      <h1>Filtrovat</h1>
      <h2>Podle země původu</h2>
      <br />
      <form>
        <div>
          <label>Brazílie</label>
          <input
            name="group1"
            type="radio"
            value="Brazil"
            checked={originCountry === "Brazil"}
            onChange={() => setOriginCountry("Brazil")}
          />
        </div>
        <div>
          <label>Costa Rica</label>
          <input
            name="group1"
            type="radio"
            value="Costa Rica"
            checked={originCountry === "Costa Rica"}
            onChange={() => setOriginCountry("Costa Rica")}
          />
        </div>
        <div>
          <label>Vietnam</label>
          <input
            name="group1"
            type="radio"
            value="Vietnam"
            checked={originCountry === "Vietnam"}
            onChange={() => setOriginCountry("Vietnam")}
          />
        </div>
        <br />
        <h2>Podle typu kávy</h2>
        <br />
        <div>
          <label>Robusta</label>
          <input
            name="group2"
            type="radio"
            value="Robusta"
            checked={coffeeTypeFilterValue === "Robusta"}
            onChange={() => setCoffeeTypeFilterValue("Robusta")}
          />
        </div>
        <div>
          <label>Arabica</label>
          <input
            name="group2"
            type="radio"
            value="Arabica"
            checked={coffeeTypeFilterValue === "Arabica"}
            onChange={() => setCoffeeTypeFilterValue("Arabica")}
          />
        </div>{" "}
        <h2>Podle měny</h2>
        <br />
        <div>
          <label>CZK</label>
          <input
            name="group3"
            type="radio"
            value="CZK"
            checked={currency === "CZK"}
            onChange={() => setCurrency("CZK")}
          />
        </div>
        <div>
          <label>USD</label>
          <input
            name="group3"
            type="radio"
            value="USD"
            checked={currency === "USD"}
            onChange={() => setCurrency("USD")}
          />
        </div>
        <h1>Seřadit</h1>
        <br />
        <div>
          <label>Od nejvyšší ceny</label>
          <input
            name="group4"
            type="radio"
            value="CZK"
            checked={sortPrice === "asc"}
            onChange={() => setSortPrice("asc")}
          />
        </div>
        <div>
          <label>Od nejnižší ceny</label>
          <input
            name="group4"
            type="radio"
            value="USD"
            checked={sortPrice === "desc"}
            onChange={() => setSortPrice("desc")}
          />
        </div>
      </form>
    </div>
  );
}
