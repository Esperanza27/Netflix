import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Loading from "./Loading";

const MySectionCarrosel = ({saga}) => {
  const [isLoading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
const saga2 =saga.toLowerCase();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=76c21120&s=${saga2}`
      );
      if (res.ok) {
        let data = await res.json();
        setFilms(data.Search);
        console.log(data);
        setLoading(false);
      } else {
        console.log("error");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-3 bg-black ">
      {isLoading && <Loading />}
      <div>
        <h4 className="text-white mx-5" style={{textTransform:"capitalize"}}>{saga2}</h4>
      <Carousel>
        <Carousel.Item interval={5000}>
          <div className="d-flex text-center mx-5 gap-2">
            {films?.slice(0, 6).map((film, index) => {
              return (
                <img
                  src={film.Poster}
                  alt={film.Title}
                  key={index}
                  style={{ width: "16%" }}
                />
              );
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="d-flex text-center mx-5 gap-2">
            {films?.slice(2, 8).map((film, index) => {
              return (
                <img
                  src={film.Poster}
                  alt={film.Title}
                  key={index}
                  style={{ width: "16%" }}
                />
              );
            })}
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
     
    </div>
  );
};
export default MySectionCarrosel;
