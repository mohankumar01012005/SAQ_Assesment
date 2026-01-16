"use client";

import { useDecisionContext } from "@/context/DecisionContext";
import { SAQ_INFO } from "@/utils/saqInfo";

export default function WhyResultModal({ onClose }: { onClose: () => void }) {
  const { result, history } = useDecisionContext();
  if (!result) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="surface w-full max-w-2xl p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">
            Why you received {result}
          </h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="rounded-lg border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 p-4 mb-6">
          <p className="font-semibold text-blue-600">{SAQ_INFO[result].title}</p>
          <p className="text-sm mt-1">{SAQ_INFO[result].description}</p>
        </div>

        <div className="space-y-3 max-h-75 overflow-y-auto">
          {history.map((h, i) => (
            <div key={i} className="surface p-3">
              <p className="font-medium">{h.question}</p>
              <p className="muted mt-1">Answer: {h.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
