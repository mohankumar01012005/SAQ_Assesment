"use client";

import { useDecisionContext } from "@/context/DecisionContext";

export default function AssessmentHistoryCard() {
  const { history } = useDecisionContext();
  if (!history.length) return null;

  return (
    <aside className="surface w-80 max-h-[75vh] overflow-y-auto p-4">
      <h3 className="mb-4 font-semibold">Assessment Path</h3>

      <div className="space-y-4 text-sm">
        {history.map((item, i) => (
          <div key={i} className="pb-3 border-b divider">
            <p className="font-medium">
              Q{i + 1}: {item.question}
            </p>
            <p className="muted mt-1">Answer: {item.answer}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
