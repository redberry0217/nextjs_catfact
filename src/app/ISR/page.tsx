import React from "react";
import type { Catfact } from "@/types";

async function IsrPage() {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const results = await response.json();
  const catFact: Catfact = results;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p className="text-xl font-semibold">😺CAT FACT - ISR😺</p>
      <p>
        🔹fact: {catFact.fact}
        <br />
        🔹length: {catFact.length}
      </p>
      <p className="mt-10">
        SSG처럼 정적 페이지를 제공
        <br />
        설정한 주기(5초)만큼 서버에서 페이지를 재생성(실시간X)
      </p>
    </div>
  );
}

export default IsrPage;
