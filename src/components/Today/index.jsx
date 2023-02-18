import { useEffect } from "react";
import Basic from "../Card";
import { useWheather } from "../WeatherContext";

function Today() {
  const { city, setCity, getWeatherData } = useWheather();
  useEffect(() => {
    getWeatherData(city);
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    getWeatherData(city);
    localStorage.setItem("city", city);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-sm " style={{ maxWidth: 650 }}>
          <a className="navbar-brand" href="#/">
            <strong>WEATHER</strong>
          </a>
          <form className="d-flex input-group w-auto" onSubmit={onSubmit}>
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginLeft: 5 }}
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </nav>
      <Basic />
    </div>
  );
}

export default Today;
