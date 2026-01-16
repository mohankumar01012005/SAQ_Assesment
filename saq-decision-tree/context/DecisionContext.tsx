"use client";

import React, { createContext, useContext, useState } from "react";
import { decisionTree } from "@/data/decisionTree";
import { SAQType } from "@/types/decision";

type HistoryItem = {
  stepId: string;
  question: string;
  answer: string;
};

type DecisionContextType = {
  currentStepId: string;
  result: SAQType | null;
  history: HistoryItem[];
  answerQuestion: (
    nextStep?: string,
    result?: SAQType,
    answerLabel?: string
  ) => void;
  recordStep: (answer: string) => void; // 👈 NEW (for STEP_6)
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

  const recordStep = (answer: string) => {
    const step = decisionTree[currentStepId];
    if (!step) return;

    setHistory((prev) => [
      ...prev,
      {
        stepId: currentStepId,
        question: step.question,
        answer,
      },
    ]);
  };

  const answerQuestion = (
    nextStep?: string,
    finalResult?: SAQType,
    answerLabel?: string
  ) => {
    if (answerLabel) {
      recordStep(answerLabel);
    }

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
      value={{
        currentStepId,
        result,
        history,
        answerQuestion,
        recordStep,
        goBack,
        reset,
      }}
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
