import { axios, APIKEY } from "../../helpers/axios";

export const LoadMovies = (page = "1") => (dispatch) => {
  dispatch({ type: "MOVIE_PENDING" });
  axios
    .get(`/movie/upcoming?api_key=${APIKEY}&page=${page}`)
    .then((res) => {
      dispatch({ type: "MOVIE_FULLFILED", payload: res.data });
    })
    .catch((err) => {
      if (!err.response) return dispatch({ type: "MOVIE_NETERROR" });
      return dispatch({
        type: "MOVIE_REJECTED",
        payload:
          err.response.data.status_message || err.response.data.errors[0],
      });
    });
};

export const LoadMovie = (id) => (dispatch) => {
  dispatch({ type: "MOVIE_PENDING" });
  axios
    .get(`/movie/${id}?api_key=${APIKEY}`)
    .then((res) => {
      dispatch({ type: "MOVIEDETAIL_FULLFILED", payload: res.data });
    })
    .catch((err) => {
      if (!err.response) return dispatch({ type: "MOVIE_NETERROR" });
      return dispatch({
        type: "MOVIE_REJECTED",
        payload: err.response.data.status_message,
      });
    });
};
