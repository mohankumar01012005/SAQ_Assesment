"use client";

import { useState } from "react";
import { useDecisionContext } from "@/context/DecisionContext";
import { SAQ_INFO } from "@/utils/saqInfo";
import WhyResultModal from "@/components/WhyResultModal";

export default function ResultCard() {
  const { result, reset } = useDecisionContext();
  const [showWhy, setShowWhy] = useState(false);

  if (!result) return null;

  const info = SAQ_INFO[result];

  return (
    <>
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 text-center">
        <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3">
          PCI DSS Recommendation
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3">
          {info.title}
        </h2>

        <p className="text-slate-700 mb-6">{info.description}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-blue-700"
          >
            Start New Assessment
          </button>

          <button
            onClick={() => setShowWhy(true)}
            className="rounded-lg border border-blue-600 px-6 py-3 text-sm sm:text-base font-medium text-blue-600 hover:bg-blue-50"
          >
            Why did I get this result?
          </button>
        </div>
      </section>

      {showWhy && <WhyResultModal onClose={() => setShowWhy(false)} />}
    </>
  );
}
