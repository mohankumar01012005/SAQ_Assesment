// Single answer option
export type AnswerOption = {
  label: string;
  value: string;
  nextStep?: string;
  result?: SAQType;
};

// One decision step
export type DecisionStep = {
  id: string;
  question: string;
  options: AnswerOption[];
};

// Possible SAQ results
export type SAQType =
  | "SAQ A"
  | "SAQ A-EP"
  | "SAQ B"
  | "SAQ C"
  | "SAQ C-VT"
  | "SAQ D";

  export type MultiSelectOption = {
  id: string;
  label: string;
};
