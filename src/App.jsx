import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./services/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormSearch from "./components/FormSearch";
import Loader from "./components/Loader";

function App() {
  const randomLocation = getRandomNumber(126);
  const [locationSeleted, setLocationSeleted] = useState(randomLocation);

  const url = `https://rickandmortyapi.com/api/location/${
    locationSeleted || getRandomNumber(126)
  }`;
  const [location, getLocation, hasError, isLoading] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [locationSeleted]);

  return (
    <div className="app">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img className="app_image" src="./banner.jpg" alt="" />
          <FormSearch setLocationSeleted={setLocationSeleted} />

          {hasError ? (
            <h2 className="app__error">
              ✖️Hey! You must provide an id from 1 to 126 😭
            </h2>
          ) : (
            <>
              <LocationInfo location={location} />
              <div className="container__resident">
                {location?.residents.map((url) => (
                  <ResidentCard key={url} url={url} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
