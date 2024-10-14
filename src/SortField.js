import "./styles.css";
import Form from "react-bootstrap/Form";

export function SortField({ filters }) {
  return (
    <Form>
      <div
        className="d-flex justify-content-center align-items-center"
        // style={{ height: "60vh" }}
      >
        <div className="container">
          <br />
          <h1>Filtrovat</h1>

          {filters.map((filter, index) => (
            <div key={index}>
              <h2>{filter.label}</h2>
              <br />
              {filter.options.map((option, idx) => (
                <div key={idx}>
                  <Form.Check
                    name={`group${index}`}
                    label={option.label}
                    type="radio"
                    value={option.value}
                    checked={filter.selectedValue === option.value}
                    onChange={() => filter.onChange(option.value)}
                  />
                </div>
              ))}
              <br />
            </div>
          ))}
        </div>
      </div>
    </Form>
  );
}
