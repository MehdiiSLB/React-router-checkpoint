import React from "react";
import { useParams, useHistory } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  const history = useHistory();
  return (
    <div>
      <div>le numero {id}</div>
      <button onClick={() => history.goBack()}>Go Back</button>
      <button onClick={() => history.push("/dashboard")}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default About;
