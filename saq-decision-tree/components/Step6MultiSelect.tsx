"use client";

import { useState } from "react";
import { useDecisionContext } from "@/context/DecisionContext";

const CONDITIONS = [
  { id: "c1", label: "Merchant systems never handle cardholder data (CHD)" },
  { id: "c2", label: "Third-party hosts the payment page or payment form" },
  { id: "c3", label: "No payment scripts are controlled by the merchant" },
];

export default function Step6MultiSelect() {
  const { answerQuestion, recordStep } = useDecisionContext();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selected.length === CONDITIONS.length) {
      recordStep("Yes – All payment functions are fully outsourced");
      answerQuestion("STEP_7");
    } else {
      recordStep("No – One or more outsourcing conditions not met");
      answerQuestion(undefined, "SAQ D");
    }
  };

  return (
    <section className="card-surface p-5 sm:p-6 md:p-8">
      <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3">
        PCI DSS SAQ Assessment
      </p>

      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Are all payment functions fully outsourced?
      </h2>

      <div className="space-y-3 mb-5">
        {CONDITIONS.map((item) => (
          <label
            key={item.id}
            className="flex items-start gap-3 border border-slate-300 dark:border-slate-600 rounded-lg p-3 cursor-pointer hover:border-blue-500"
          >
            <input
              type="checkbox"
              checked={selected.includes(item.id)}
              onChange={() => toggle(item.id)}
              className="mt-1 accent-blue-600"
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>

      <p className="text-sm text-muted mb-4">
        ⚠️ To proceed as <strong>YES</strong>, select all options.
      </p>

      <button
        onClick={handleContinue}
        className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
      >
        Continue
      </button>
    </section>
  );
}
