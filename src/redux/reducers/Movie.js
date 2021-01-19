const initialState = {
  loading: true,
  movies: [],
  movie: {
    genres: [],
    production_companies: [],
    production_countries: [],
    spoken_languages: [],
  },
  page: 1,
  pages: 1,
  total: 0,
  error: "",
};

const MovieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MOVIE_PENDING":
      return {
        ...state,
        loading: true,
        movies: [],
        error: "",
      };
    case "MOVIE_FULLFILED":
      return {
        ...state,
        movies: payload.results,
        loading: false,
        page: payload.page,
        pages: payload.total_pages,
        total: payload.total_results,
        error: "",
      };

    case "MOVIEDETAIL_FULLFILED":
      return {
        ...state,
        movie: payload,
        loading: false,
        error: "",
      };

    case "MOVIE_REJECTED":
      return {
        ...state,
        loading: false,
        movies: [],
        error: payload,
      };
    case "MOVIE_NETERROR":
      return {
        ...state,
        loading: false,
        movies: [],
        error: "Network Error",
      };

    default:
      return state;
  }
};

export default MovieReducer;
