"use client";

import { useDecisionContext } from "@/context/DecisionContext";
import { SAQ_INFO } from "@/utils/saqInfo";

export default function WhyResultModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const { result, history } = useDecisionContext();

  if (!result) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Why you received {result}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800"
          >
            ✕
          </button>
        </div>

        {/* Result Explanation */}
        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm font-semibold text-blue-700 mb-1">
            PCI DSS Recommendation
          </p>
          <p className="text-xl font-bold text-blue-800">
            {SAQ_INFO[result].title}
          </p>
          <p className="mt-2 text-sm text-blue-700">
            {SAQ_INFO[result].description}
          </p>
        </div>

        {/* Decision Path */}
        <div>
          <h3 className="text-sm font-semibold text-slate-800 mb-2">
            Your Assessment Path
          </h3>

          <div className="space-y-3 text-sm max-h-75 overflow-y-auto">
            {history.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 p-3"
              >
                <p className="font-medium text-slate-900">
                  Q{index + 1}: {item.question}
                </p>
                <p className="text-slate-700 mt-1">
                  Answer:{" "}
                  <span className="font-medium">{item.answer}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
