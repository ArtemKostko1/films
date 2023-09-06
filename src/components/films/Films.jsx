import React from "react";
import Film from "../film/Film";
import { Col, Row } from "antd";

const Films = (props) => {
  const { films } = props;

  return (
    <Row gutter={[16, 24]}>
      {films.map((film) => (
        <Col className="gutter-row" span={6}>
          <Film key={film.imdbID} {...film} />
        </Col>
      ))}
    </Row>
  );
};

export default Films;
