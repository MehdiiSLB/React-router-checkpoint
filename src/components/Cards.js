import React from "react";
import axios from "axios";
import Data from "./Data";
import "antd/dist/antd.css";
import { useParams, useHistory } from "react-router-dom";
import { Card } from "antd";
import { Input } from "antd";
import { useState, useEffect } from "react";

const Cards = (props) => {
  const { Meta } = Card;
  const history = useHistory();
  console.log(props);

  return (
    <div>
      <Card
        onClick={() => history.push(`/Details/${props.data.id}`)}
        type="button"
        class="btn btn-info"
        hoverable
        style={{ width: 240, marginLeft: "10rem" }}
        cover={
          <img
            alt="example"
            src={`http://image.tmdb.org/t/p/w300${props.data.poster_path}`}
          />
        }
      >
        {" "}
        <Meta
          title={props.data.original_title}
          description={props.data.overview}
        />
      </Card>
    </div>
  );
};

export default Cards;
