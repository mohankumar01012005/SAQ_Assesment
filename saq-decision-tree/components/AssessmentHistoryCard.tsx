"use client";

import { useDecisionContext } from "@/context/DecisionContext";

export default function AssessmentHistoryCard() {
  const { history } = useDecisionContext();

  if (history.length === 0) return null;

  return (
    <div className="w-80 max-h-[75vh] overflow-y-auto rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold text-gray-700">
        Assessment Path
      </h3>

      <div className="space-y-3 text-sm">
        {history.map((item, index) => (
          <div key={index} className="border-b pb-2 last:border-none">
            <p className="font-medium text-gray-800">
              Q{index + 1}: {item.question}
            </p>
            <p className="text-gray-600">
              Answer: <span className="font-medium">{item.answer}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
