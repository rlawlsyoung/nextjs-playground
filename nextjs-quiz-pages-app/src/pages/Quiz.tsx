import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json);

const Quiz = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const { data, error } = useSWR(`api/quzi?page=${pageIndex}`, fetcher);

  if (error) {
    return (
      <div>
        <h3>에러가 발생했습니다.</h3>
      </div>
    );
  }

  if (!data) {
    <div>
      <h3>Loading...</h3>
    </div>;
  }

  const { quiz, next, prev, page, total } = data;

  return <div>Quiz</div>;
};

export default Quiz;
