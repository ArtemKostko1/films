import React from "react";
import { Spin } from "antd";
import Films from "../../components/films/Films";
import "./Main.style.scss";
import FilmsService from "../../services/FilmsService";

class Main extends React.Component {
  state = {
    films: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    FilmsService.getAll()
      .then((data) => {
        this.setState({ films: data.Search });
      })
      .catch((e) => console.log(e.args.value))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { films, loading } = this.state;
    return (
      <main className="container content">
        {films.length && !loading ? (
          <Films films={this.state.films} />
        ) : (
          <Spin className="spin" size="large" />
        )}
      </main>
    );
  }
}

export default Main;
