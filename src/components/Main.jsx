import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
const Main = () => {
  const [country, setCountry] = useState("tallinn");
  const [weatherinfo, setWeather] = useState("");
  const [city, setCity] = useState("tallinn");
  const [isloading, setIsloading] = useState(true);

  async function fetchUrl(e) {
    console.log(e);
    if (e === undefined) {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${country}&cnt=8&appid=f0ec1584bd86d7aed802527bbf63c343&units=metric`
      );
      console.log(res.data.city.name);
      setWeather(res.data);
      setCity(res.data.city.name);
      setCountry("");
    } else {
      e.preventDefault();
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${country}&cnt=8&appid=f0ec1584bd86d7aed802527bbf63c343&units=metric`
      );
      console.log(res.data.city.name);
      setWeather(res.data);
      setCity(res.data.city.name);
      setCountry("");
    }
  }
  // async function defaultUrl() {
  //   const res = await axios(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${country}&cnt=8&appid=f0ec1584bd86d7aed802527bbf63c343&units=metric`
  //   );
  //   console.log(res.data.city.name);
  //   setWeather(res.data);
  //   setCity(res.data.city.name);
  //   setIsloading(false);
  // }

  useEffect(() => {
    fetchUrl();
  }, []);
  // if (isloading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <main>
      <form onSubmit={(e) => fetchUrl(e)}>
        <input
          onChange={(e) => setCountry(e.target.value)}
          type="text"
          value={country}
          placeholder="Enter a city"
        />
        <button>Search</button>
      </form>
      <h2>{city}</h2>
      <section>
        {weatherinfo !== "" &&
          weatherinfo.list.map((item, index) => {
            const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
            console.log(icon);
            return (
              <Card
                key={index}
                temp={item.main.temp}
                condition={item.weather[0].main}
                desc={item.weather[0].description}
                icon={item.weather[0].icon}
                time={item.dt_txt}
              />
            );
          })}
      </section>
    </main>
  );
};

export default Main;
