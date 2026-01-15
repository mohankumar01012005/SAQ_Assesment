"use client";

import { AnswerOption } from "@/types/decision";
import { useDecisionContext } from "@/context/DecisionContext";

export default function AnswerButton({ option }: { option: AnswerOption }) {
  const { answerQuestion } = useDecisionContext();

  return (
    <button
      onClick={() => answerQuestion(option.nextStep, option.result)}
      className="
        w-full rounded-lg border border-slate-300
        px-4 py-2.5 sm:px-5 sm:py-3
        text-left text-sm sm:text-base text-slate-800
        bg-white
        hover:border-blue-600 hover:bg-blue-50
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition
      "
    >
      {option.label}
    </button>
  );
}
