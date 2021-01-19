import React from "react";
import { Link, useLocation } from "react-router-dom";

function Default() {
  const path = useLocation().pathname;

  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img
              src="/dist/img/user2-160x160.jpg"
              className="img-circle"
              alt="User"
            />
          </div>
          <div className="pull-left info">
            <p>Alexander Pierce</p>
            <a href="#1">
              <i className="fa fa-circle text-success"></i> Online
            </a>
          </div>
        </div>
        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input
              type="text"
              name="q"
              className="form-control"
              placeholder="Search..."
            />
            <span className="input-group-btn">
              <button
                type="submit"
                name="search"
                id="search-btn"
                className="btn btn-flat"
              >
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MAIN NAVIGATION</li>
          <li className="active treeview menu-open">
            <a href="#1">
              <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              <li className={path === "/" ? "active" : ""}>
                <Link to="/">
                  <i className="fa fa-circle-o"></i> Genre List
                </Link>
              </li>

              <li className={path === "/movie" ? "active" : ""}>
                <Link to="/movie">
                  <i className="fa fa-circle-o"></i> Movie List
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
  );
}

export default Default;
