import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="leading-[1.8]">QUIZ</p>
      <p className="leading-[1.8]">Welcome To Next Quiz App</p>

      <Link href="/quiz" className="text-center p-3 bg-white mt-2">
        퀴즈 시작하기
      </Link>
    </div>
  );
}
