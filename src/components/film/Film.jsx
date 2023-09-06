import React from "react";
import { Card } from "antd";
import "./Films.styles.scss";

const Film = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <Card
      id={id}
      className="card"
      hoverable
      cover={<img alt={title} src={poster} />}
    >
      <p>
        {year}, <span className="card-film-type">{type}</span>
      </p>
    </Card>
  );
};

export default Film;
