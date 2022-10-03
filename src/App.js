import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/weather";
import Error from "./components/error";

const App = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState("");
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

  const getWeather = async () => {
    try {
      const response = await axios({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${process.env.REACT_APP_API}&units=metric`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResult(response.data);
      setIcon(
        "http://openweathermap.org/img/w/" +
          response.data.weather[0].icon +
          ".png"
      );
      setSunrise(response.data.sys.sunrise);
      setSunset(response.data.sys.sunset);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // useEffect(() => {
  //   getWeather();
  // }, []);
 
  return (
    <>
      <section className="h-screen flex justify-center items-center align-center">
        <div className="grid grid-cols-1 gap-4">
          {/* <h1 className="text-white text-4xl font-medium">Weather App</h1> */}
          <p data-testid="instructions" className="text-white">
            Enter your location to get todays weather
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="p-2 border-solid border border-white rounded mr-2 sm:w-96"
                type="text"
                value={search}
                placeholder="search"
                onChange={handleChange}
              ></input>
              <button
                className="p-2 border-solid border border-white rounded ml-2 w-20 text-white hover:border-black"
                type="submit"
                value="submit"
                aria-label="submit"
              >
                Submit
              </button>
            </form>
          </div>
          {!error && !loading ? (
            <Weather
              sunrise={sunrise}
              sunset={sunset}
              result={result}
              icon={icon}
            />
          ) : error && !loading ? (
            <Error />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default App;
