"use client";
import React, { useEffect, useState } from "react";
import type { Catfact } from "@/types";

function CsrPage() {
  const [catFact, setCatFact] = useState<Catfact>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const result = await response.json();
      setCatFact(result);
    };

    fetchData();
  }, []);

  if (!catFact)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        데이터 로드중...
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p className="text-xl font-semibold">😺CAT FACT - CSR😺</p>
      <p>
        🔹fact: {catFact.fact}
        <br />
        🔹length: {catFact.length}
      </p>
      <p className="mt-10">
        브라우저에서 JavaScript를 이용해 동적으로 페이지 렌더링
        <br />
        렌더링의 주체는 클라이언트
      </p>
    </div>
  );
}

export default CsrPage;
