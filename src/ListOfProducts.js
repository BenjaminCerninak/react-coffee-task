import Card from "react-bootstrap/Card";
import "./styles.css";
export function ListOfProducts({ finalFilteredList }) {
  return (
    <div className="d-flex flex-column align-items-center">
      {finalFilteredList.map((item) => (
        <Card
          key={item.id}
          border="secondary"
          style={{ width: "22rem", margin: "15px" }}
        >
          <Card.Header>{item.name}</Card.Header>
          <Card.Body>
            <Card.Title>{item.country}</Card.Title>
            <Card.Text>
              Typ: {item.type}
              Cena:{" "}
              <b>
                {item.price} {item.currency == "CZK" ? "Kč" : "$"}
              </b>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
