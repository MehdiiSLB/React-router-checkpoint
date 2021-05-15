import axios from "axios";
import Cards from "./Cards";
import { useState, useEffect } from "react";
const Data = () => {
  const [movies, SetMovies] = useState();
  async function getMovie() {
    try {
      const reponse = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=43b746b767edc8522cb6200aa1821bcb"
      );
      SetMovies(reponse.data.results);
    } catch (error) {}
  }
  useEffect(() => {
    getMovie();
  }, []);

  return <div>{movies && movies.map((elem) => <Cards data={elem} />)}</div>;
};

export default Data;
