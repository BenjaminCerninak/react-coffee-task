import "./styles.css";
export function ListOfProducts({ finalFilteredList }) {
  return (
    <ul>
      {finalFilteredList.map((item) => (
        <li key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.country}</h2>
          <h2>Typ: {item.type}</h2>

          <h3>
            Cena:{" "}
            <b>
              {item.price} {item.currency == "CZK" ? "Kč" : "$"}
            </b>
          </h3>
        </li>
      ))}
    </ul>
  );
}
