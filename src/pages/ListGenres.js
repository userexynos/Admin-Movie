import React from "react";
import { DefaultHeader, DefaultSideBar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { LoadGenres } from "../redux/actions/Genre";

function ListGenres() {
  const Genre = useSelector((state) => state.Genre);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(LoadGenres());
  }, [dispatch]);

  return (
    <>
      <DefaultHeader />
      <DefaultSideBar />

      <div className="content-wrapper">
        <section className="content-header">
          <h1>List Genre</h1>
          <ol className="breadcrumb">
            <li>
              <a href="/">
                <i className="fa fa-dashboard"></i> Home
              </a>
            </li>
            <li className="active">Genres</li>
          </ol>
        </section>

        <section className="content">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Genres</h3>
            </div>
            <div className="box-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={{ width: 100 }} scope="col">
                      No
                    </th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {Genre.loading ? (
                    <tr>
                      <td colSpan="2" className="text-center my-3">
                        Now Loading
                      </td>
                    </tr>
                  ) : Genre.error ? (
                    <tr>
                      <td colSpan="2" className="text-center my-3">
                        {Genre.error}
                      </td>
                    </tr>
                  ) : (
                    Genre.genres.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* <div className="box-footer">Footer</div> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default ListGenres;
