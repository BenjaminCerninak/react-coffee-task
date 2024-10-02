import "./styles.css";

export function SortField({ filters }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
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
                <label>{option.label}</label>
                <input
                  name={`group${index}`}
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
  );
}
