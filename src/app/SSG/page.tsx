import React from "react";
import type { Catfact } from "@/types";

async function SsgPage() {
  const response = await fetch(`https://catfact.ninja/fact`);
  const results = await response.json();
  const catFact: Catfact = results;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p className="text-xl font-semibold">😺CAT FACT - SSG😺</p>
      <p>
        🔹fact: {catFact.fact}
        <br />
        🔹length: {catFact.length}
      </p>
      <p className="mt-10">
        서버에서 페이지를 렌더링하여 클라이언트에 HTML을 전달
        <br />
        최초 빌드시에만 정적페이지 생성
      </p>
    </div>
  );
}

export default SsgPage;
