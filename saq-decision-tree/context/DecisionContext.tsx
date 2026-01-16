"use client";

import React, { createContext, useContext, useState } from "react";
import { decisionTree } from "@/data/decisionTree";
import { SAQType } from "@/types/decision";

type HistoryItem = {
  stepId: string;
};

type DecisionContextType = {
  currentStepId: string;
  result: SAQType | null;
  answerQuestion: (nextStep?: string, result?: SAQType) => void;
  goBack: () => void;
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
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const answerQuestion = (nextStep?: string, finalResult?: SAQType) => {
    setHistory((prev) => [...prev, { stepId: currentStepId }]);

    if (finalResult) {
      setResult(finalResult);
      return;
    }

    if (nextStep && decisionTree[nextStep]) {
      setCurrentStepId(nextStep);
    } else {
      setResult("SAQ D");
    }
  };

  const goBack = () => {
    setHistory((prev) => {
      if (prev.length === 0) {
        // STEP_1 back → safe reset
        setCurrentStepId("STEP_1");
        setResult(null);
        return [];
      }

      const newHistory = [...prev];
      const last = newHistory.pop();

      if (last) {
        setCurrentStepId(last.stepId);
        setResult(null);
      }

      return newHistory;
    });
  };

  const reset = () => {
    setCurrentStepId("STEP_1");
    setResult(null);
    setHistory([]);
  };

  return (
    <DecisionContext.Provider
      value={{ currentStepId, result, answerQuestion, goBack, reset }}
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
