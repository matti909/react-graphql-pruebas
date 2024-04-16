import React from "react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <button
            className="page-link"
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage ? "page-item active" : "page-item"
            }
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li
          className={
            currentPage === pageNumbers.length
              ? "page-item disabled"
              : "page-item"
          }
        >
          <button
            className="page-link"
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
