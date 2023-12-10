import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../services/TMDB";
import Movies from "./Movies";
import Pagination from "./Pagination";
import { selectCategory } from "react-redux";

export default function MovieList() {
  const [page, setPage] = useState(1);
  const { idOrCategoryName } = useSelector((state) => state.currentCategory);
  const { data, error, isFetching } = useGetMoviesQuery({
    idOrCategoryName,
    page,
  });

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (!data.results.length) {
    return <div>NO Movies found</div>;
  }

  if (error) {
    return <div>Some error occured</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <>
          <Movies movies={data} />
          <Pagination
            currentPage={page}
            setPage={setPage}
            totalPages={data.total_pages}
          />
        </>
      </div>
    </div>
  );
}
