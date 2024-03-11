import React from "react";
import type { Catfact } from "@/types";

async function SsrPage() {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const results = await response.json();
  const catFact: Catfact = results;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p className="text-xl font-semibold">😺CAT FACT - SSR😺</p>
      <p>
        🔹fact: {catFact.fact}
        <br />
        🔹length: {catFact.length}
      </p>
      <p className="mt-10">
        빌드 시점에 모든 페이지를 미리 생성
        <br />
        SSG, ISR처럼 렌더링 주체는 서버
      </p>
    </div>
  );
}

export default SsrPage;
