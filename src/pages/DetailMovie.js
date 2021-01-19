import React from "react";
import { DefaultHeader, DefaultSideBar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { LoadMovie } from "../redux/actions/Movie";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../helpers/axios";

function DetailMovie() {
  const { movie, loading, error } = useSelector((state) => state.Movie);
  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(LoadMovie(id));
  }, [dispatch, id]);

  return (
    <>
      <DefaultHeader />
      <DefaultSideBar />

      <div className="content-wrapper">
        <section className="content-header">
          <h1>Detail Movie</h1>
          <ol className="breadcrumb">
            <li>
              <a href="/">
                <i className="fa fa-dashboard"></i> Home
              </a>
            </li>
            <li className="active">Movie</li>
            <li className="active">Detail</li>
          </ol>
        </section>

        <section className="content">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Detail Movie</h3>
            </div>
            <div className="box-body">
              {loading ? (
                <div>Now Loading</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                <>
                  <img
                    src={IMAGE_URL + movie.poster_path}
                    width={130}
                    className="d-block"
                    alt="Poster"
                  />

                  <div className="input-group my-4">
                    <div>IMDB ID</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="IMDB ID"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={movie.imdb_id}
                      disabled
                    />
                  </div>

                  <div className="input-group my-4">
                    <div>Original Title</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Original Title"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={movie.original_title}
                      disabled
                    />
                  </div>

                  <div className="input-group my-4">
                    <div>Original Language</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Original Language"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={movie.original_language}
                      disabled
                    />
                  </div>

                  <div className="input-group my-4">
                    <div>Title</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={movie.title}
                      disabled
                    />
                  </div>

                  <div className="input-group my-4">
                    <div>Overview</div>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Overview"
                      aria-label="Overview"
                      aria-describedby="basic-addon1"
                      value={movie.overview}
                      cols={100}
                      rows={10}
                      disabled
                    />
                  </div>

                  {movie.genres.length ? (
                    movie.genres.map((item, index) => (
                      <div key={index} className="input-group my-4">
                        <div>Genre</div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Genre"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={item.name}
                          disabled
                        />
                      </div>
                    ))
                  ) : (
                    <div className="input-group my-4">
                      <div>Genre</div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Genre"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        disabled
                      />
                    </div>
                  )}

                  {movie.production_companies.length ? (
                    movie.production_companies.map((item, index) => (
                      <div key={index} className="input-group my-4">
                        <div>Production Company</div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Production Company"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={item.name}
                          disabled
                        />
                      </div>
                    ))
                  ) : (
                    <div className="input-group my-4">
                      <div>Production Company</div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Production Company"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        disabled
                      />
                    </div>
                  )}

                  {movie.production_countries.length ? (
                    movie.production_countries.map((item, index) => (
                      <div key={index} className="input-group my-4">
                        <div>Production Country</div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Production Country"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={item.name}
                          disabled
                        />
                      </div>
                    ))
                  ) : (
                    <div className="input-group my-4">
                      <div>Production Country</div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Production Country"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        disabled
                      />
                    </div>
                  )}

                  {movie.spoken_languages.length ? (
                    movie.spoken_languages.map((item, index) => (
                      <div key={index} className="input-group my-4">
                        <div>Spoken Language</div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Spoken Language"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={item.name}
                          disabled
                        />
                      </div>
                    ))
                  ) : (
                    <div className="input-group my-4">
                      <div>Spoken Language</div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Spoken Language"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        disabled
                      />
                    </div>
                  )}
                  <div className="input-group my-4">
                    <div>Budget</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Budget"
                      aria-label="Budget"
                      aria-describedby="basic-addon1"
                      value={movie.budget}
                      cols={100}
                      rows={10}
                      disabled
                    />
                  </div>

                  <div className="input-group my-4">
                    <div>Homepage</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Homepage"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={movie.hompage}
                      disabled
                    />
                  </div>

                  <div className="input-group my-4">
                    <div>Status</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Status"
                      value={movie.status}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                  </div>

                  <div className="input-group my-4">
                    <div>Release Date</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Release Date"
                      value={movie.release_date}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                  </div>

                  <div className="input-group my-4">
                    <div>Adult</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Adult"
                      value={movie.adult}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                  </div>

                  <div className="input-group my-4">
                    <div>Video</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Video"
                      value={movie.video}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DetailMovie;
