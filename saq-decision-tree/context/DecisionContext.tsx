"use client";

import React, { createContext, useContext, useState } from "react";
import { decisionTree } from "@/data/decisionTree";
import { SAQType } from "@/types/decision";

type DecisionContextType = {
  currentStepId: string;
  result: SAQType | null;
  answerQuestion: (nextStep?: string, result?: SAQType) => void;
  reset: () => void;
};

const DecisionContext = createContext<DecisionContextType | undefined>(
  undefined
);

export const DecisionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStepId, setCurrentStepId] = useState("STEP_1");
  const [result, setResult] = useState<SAQType | null>(null);

  const answerQuestion = (nextStep?: string, finalResult?: SAQType) => {
    if (finalResult) {
      setResult(finalResult);
      return;
    }

    if (nextStep && decisionTree[nextStep]) {
      setCurrentStepId(nextStep);
    } else {
      // Edge case safety
      setResult("SAQ D");
    }
  };

  const reset = () => {
    setCurrentStepId("STEP_1");
    setResult(null);
  };

  return (
    <DecisionContext.Provider
      value={{ currentStepId, result, answerQuestion, reset }}
    >
      {children}
    </DecisionContext.Provider>
  );
};

export const useDecisionContext = () => {
  const ctx = useContext(DecisionContext);
  if (!ctx) {
    throw new Error("useDecisionContext must be used inside DecisionProvider");
  }
  return ctx;
};
