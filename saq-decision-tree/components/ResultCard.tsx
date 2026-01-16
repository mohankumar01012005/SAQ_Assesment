"use client";

import { useState } from "react";
import { useDecisionContext } from "@/context/DecisionContext";
import { SAQ_INFO } from "@/utils/saqInfo";
import WhyResultModal from "./WhyResultModal";

export default function ResultCard() {
  const { result, reset } = useDecisionContext();
  const [showWhy, setShowWhy] = useState(false);

  if (!result) return null;
  const info = SAQ_INFO[result];

  return (
    <>
      <section className="surface p-8 text-center">
        <p className="text-xs font-semibold text-blue-600 mb-3">
          PCI DSS Recommendation
        </p>

        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          {info.title}
        </h2>

        <p className="muted mb-6">{info.description}</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Start New Assessment
          </button>

          <button
            onClick={() => setShowWhy(true)}
            className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700"
          >
            Why did I get this result?
          </button>
        </div>
      </section>

      {showWhy && <WhyResultModal onClose={() => setShowWhy(false)} />}
    </>
  );
}
