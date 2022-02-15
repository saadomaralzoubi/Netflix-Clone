import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

function Home() {
  const [movie, setMovie] = useState();
  const getMovies = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
      const data = await response.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <h3>Movies List:</h3>
      {movie && <MovieList movies={movie} />}
    </>
  );
}

export default Home;
