const Toolbar = () => {
  return (
    <div className="bg-black px-5">
      <div className="d-flex justify-content-between py-2 ">
        <div className="text-light">
          <div className="d-flex gap-3">
            <h3 className="text-light ">TV Shows</h3>
            <div className="dropdown ml-4 my-1">
              <button
                className="btn btn-secondary btn-sm text-white bg-transparent rounded-0 dropdown-toggle py-1  "
                type="button"
                dataBsToggle="dropdown"
                ariaExpanded="false"
                ariaHaspopup="true"
                id="dropdownMenuButton"
              >
                <small className="px-1" >Genres</small>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item active" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-light">
          <button
            type="button"
            className="btn btn-outline-secondary px-2 py-0 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-text-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <button type="button" className="btn btn-outline-secondary px-2 py-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-grid"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    /*   <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="dropdown ml-4 mt-1">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="background-color: #221f1f">
                Genres &nbsp;
              </button>
              <div
                className="dropdown-menu bg-dark"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item text-white bg-dark" href="#">Comedy</a>
                <a className="dropdown-item text-white bg-dark" href="#">Drama</a>
                <a className="dropdown-item text-white bg-dark" href="#" >Thriller</a >
              </div>
            </div>
          </div>
          <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
        </div>  */
  );
};
export default Toolbar;
