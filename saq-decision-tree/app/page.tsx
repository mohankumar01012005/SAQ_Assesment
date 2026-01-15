"use client";

import { decisionTree } from "@/data/decisionTree";
import { useDecisionContext } from "@/context/DecisionContext";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";
import Step6MultiSelect from "@/components/Step6MultiSelect";

export default function Home() {
  const { currentStepId, result } = useDecisionContext();

  if (result) return <ResultCard />;

  if (currentStepId === "STEP_6") {
    return <Step6MultiSelect />;
  }

  return <QuestionCard step={decisionTree[currentStepId]} />;
}
