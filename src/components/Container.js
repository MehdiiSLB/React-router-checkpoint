import React from "react";
import axios from "axios";
import { Input } from "antd";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const Container = () => {
  const [input, setInput] = useState();
  const { id } = useParams();
  async function getDetails() {
    try {
      const reponse3 = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=43b746b767edc8522cb6200aa1821bcb`
      );
      setInput(reponse3.data);
    } catch (error) {}
  }
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      {input && (
        <ul>
          <li>Rate :{input.vote_average}</li>
          <li>Released : {input.release_date}</li>
          <li>Run time:{input.runtime}</li>
          <li>Genre : {input.genres[0].name}</li>
          <li>Language :{input.original_language}</li>
          <li>Overview : {input.overview}</li>
        </ul>
      )}
    </div>
  );
};

export default Container;
