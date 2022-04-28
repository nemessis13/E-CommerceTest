import React from "react";
import { FaCartPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar p-2  navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          <img src="#" className="img-fluid" width="200px" alt="" color="secundary"/>
          PS Store
        </div>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-lg-auto me-auto ml-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a
                className="nav-link active text-success m-2"
                aria-current="page"
                href=""
              >
                Inicio
              </a>
            </li>
            <li className="nav-item m-2">
              <a
                className="nav-link active text-success"
                aria-current="page"
                href="./paginas/clanes.html"
              >
                Articulos
              </a>
            </li>
            <li className="nav-item m-2">
              <a
                className="nav-link active text-success"
                aria-current="page"
                href="./paginas/alianzas.html"
              >
                Carrito
              </a>
            </li>
            <button className=" m-2 text-success">
              <FaCartPlus />
            </button>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
