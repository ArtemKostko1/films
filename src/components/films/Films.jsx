import React from "react";
import Film from "../film/Film";
import { Col, Row } from "antd";

const Films = (props) => {
  const { films } = props;

  return (
    <Row gutter={[24, 24]}>
      {films.map((film) => (
        <Col key={film.imdbID} xs={24} sm={12} md={8} lg={6}>
          <Film {...film} />
        </Col>
      ))}
    </Row>
  );
};

export default Films;
