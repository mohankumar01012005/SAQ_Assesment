"use client";

import { DecisionStep } from "@/types/decision";
import AnswerButton from "./AnswerButton";

export default function QuestionCard({ step }: { step: DecisionStep }) {
  return (
    <section className="surface p-6">
      <p className="text-xs font-semibold text-blue-600 mb-3">
        PCI DSS SAQ Assessment
      </p>

      <h2 className="text-lg font-semibold mb-5">{step.question}</h2>

      <div className="space-y-3">
        {step.options.map((opt) => (
          <AnswerButton key={opt.label} option={opt} />
        ))}
      </div>
    </section>
  );
}
