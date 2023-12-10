import React from "react";

import "./Pagination.css";

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const handlePrev = () => {
    if (currentPage != 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage != totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="custom-btn-group" role="group">
            <button
              onClick={handlePrev}
              type="button custom-btn"
              className="btn btn-outline-primary custom-btn"
            >
              Previous Page
            </button>
            <div className="current-page">{currentPage}</div>
            <button
              onClick={handleNext}
              type="button"
              className="btn btn-outline-primary custom-btn"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
