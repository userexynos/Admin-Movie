import React from "react";
import { DefaultHeader, DefaultSideBar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { LoadMovies } from "../redux/actions/Movie";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../helpers/axios";

function ListMovies(props) {
  const Movie = useSelector((state) => state.Movie);
  const dispatch = useDispatch();

  const search = props.location.search;
  const params = new URLSearchParams(search);
  const page = params.get("page");

  React.useEffect(() => {
    dispatch(LoadMovies(page));
  }, [dispatch, page]);

  const RenderMovie = () => (
    <>
      {Movie.loading ? (
        <tr>
          <td colSpan="8" className="text-center my-3">
            Now Loading
          </td>
        </tr>
      ) : Movie.error ? (
        <tr>
          <td colSpan="8" className="text-center my-3">
            {Movie.error}
          </td>
        </tr>
      ) : !Movie.movies.length ? (
        <tr>
          <td colSpan="8" className="text-center my-3">
            No data on page {page}
          </td>
        </tr>
      ) : (
        Movie.movies.map((item, index) => (
          <tr key={index}>
            <td>{(Movie.page - 1) * Movie.movies.length + (index + 1)}</td>
            <td>
              <img src={IMAGE_URL + item.poster_path} alt="POSTER" />
            </td>
            <td>{item.title}</td>
            <td>{item.overview}</td>
            <td>{item.release_date}</td>
            <td>{item.adult ? "Yes" : "No"}</td>
            <td>{item.video ? "Yes" : "No"}</td>
            <td>
              <Link to={`/movie/${item.id}`}>Detail</Link>
            </td>
          </tr>
        ))
      )}
    </>
  );

  const RenderPagination = () => (
    <ul className="pagination">
      <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
        <Link
          className="page-link"
          to={`?page=${page - 1}`}
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </Link>
      </li>
      {Array(Movie.pages)
        .join()
        .split(",")
        .map((_, index) => (
          <li className="page-item" key={index}>
            <Link className="page-link" to={`?page=${index + 1}`}>
              {index + 1}
            </Link>
          </li>
        ))}
      <li className="page-item">
        <Link className="page-link" to={`?page=${page}`} aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <DefaultHeader />
      <DefaultSideBar />

      <div className="content-wrapper">
        <section className="content-header">
          <h1>List Movie</h1>
          <ol className="breadcrumb">
            <li>
              <a href="/">
                <i className="fa fa-dashboard"></i> Home
              </a>
            </li>
            <li className="active">Movies</li>
          </ol>
        </section>

        <section className="content">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Upcoming Movies</h3>
            </div>
            <div className="box-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th style={{ width: 200 }}>Poster</th>
                    <th style={{ width: 130 }}>Title</th>
                    <th style={{ width: 300 }}>Overview</th>
                    <th>Release Date</th>
                    <th style={{ width: 50 }}>Adult</th>
                    <th>Video</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <RenderMovie />
                </tbody>
              </table>
            </div>
            <div className="box-footer">
              <RenderPagination />

              <div className="text-bold">
                Page {Movie.page} of {Movie.pages}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ListMovies;
