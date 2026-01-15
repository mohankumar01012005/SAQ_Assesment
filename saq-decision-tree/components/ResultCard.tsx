"use client";

import { useDecisionContext } from "@/context/DecisionContext";
import { SAQ_INFO } from "@/utils/saqInfo";

export default function ResultCard() {
  const { result, reset } = useDecisionContext();

  if (!result) return null;

  const info = SAQ_INFO[result];

  return (
    <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 text-center">
      <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2">
        PCI DSS Recommendation
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
        {info.title}
      </h1>

      <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8">
        {info.description}
      </p>

      <button
        onClick={reset}
        className="
          rounded-lg bg-blue-600
          px-5 py-2 sm:px-6 sm:py-2.5
          text-sm sm:text-base
          text-white font-medium
          hover:bg-blue-700
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
        "
      >
        Start New Assessment
      </button>
    </section>
  );
}
