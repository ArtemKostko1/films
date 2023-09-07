import Axios from "axios";

export default class FilmsService {
  static getAll() {
    return Axios.get(
      "http://www.omdbapi.com/?apikey=c6b09b1e&s=movie&page=1"
    ).then((response) => {
      return response.data;
    });
  }
  static getById(filmId) {
    return Axios.get(
      `http://www.omdbapi.com/?apikey=c6b09b1e&i=${filmId}`
    ).then((response) => {
      return response.data;
    });
  }
}
