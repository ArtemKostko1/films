import Axios from "axios";

export default class FilmsService {
  static getAll() {
    return Axios.get("http://www.omdbapi.com/?apikey=c6b09b1e&s=Harry&Potter", {}).then((response) => {
      return response.data;
    });
  }
//   static create(data) {
//     return Axios.post(`/api/abbreviation`, data);
//   }
//   static update(id, data) {
//     return Axios.put(`/api/abbreviation/${id}`, data);
//   }
//   static remove(ids) {
//     let idsParam = ids
//       .reduce((accum, id) => (accum += `ids=${id}&`), "")
//       .slice(0, -1);
//     return Axios.delete(`/api/abbreviation?${idsParam}`);
//   }
}