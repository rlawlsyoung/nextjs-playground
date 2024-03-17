import { TSavedAnswer } from "@/types/quiz";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Quiz = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [answered, setAnswered] = useState<TSavedAnswer>({});
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

  const addAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const latestAnswers = { ...answered, [name]: value };
    setAnswered(latestAnswers);
    localStorage.setItem("quiz", JSON.stringify(latestAnswers));
  };
  return (
    <>
      <div>
        <p>
          {parseInt(page) + 1} of {total}
        </p>
      </div>
      <div>
        <p>{quiz.question}</p>
      </div>
      <ul>
        {quiz.options.map((option: string) => (
          <li key={option}>
            <input
              type="radio"
              name={quiz.id.toString()}
              onChange={addAnswer}
              checked={answered[quiz.id] === option}
            ></input>
          </li>
        ))}
      </ul>
      <div>
        {prev ? (
          <button onClick={() => setPageIndex(pageIndex - 1)}>이전 문제</button>
        ) : (
          <Link href="/">취소</Link>
        )}
        {next ? (
          <button
            onClick={() => setPageIndex(pageIndex + 1)}
            disabled={answered[quiz.id] === undefined}
          >
            다음 문제
          </button>
        ) : (
          answered[quiz.id] !== undefined && <Link href="/result">끝</Link>
        )}
      </div>
    </>
  );
};

export default Quiz;
