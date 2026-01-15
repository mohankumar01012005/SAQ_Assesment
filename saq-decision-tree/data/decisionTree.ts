import { DecisionStep } from "@/types/decision";

export const decisionTree: Record<string, DecisionStep> = {
  STEP_1: {
    id: "STEP_1",
    question:
      "Do you store cardholder data (PAN, SAD)?\n\nIncludes databases, logs, backups, files, emails, recordings.",
    options: [
      { label: "Yes", value: "YES", result: "SAQ D" },
      { label: "No", value: "NO", nextStep: "STEP_2" },
    ],
  },

  STEP_2: {
    id: "STEP_2",
    question:
      "Do your systems process or transmit cardholder data?",
    options: [
      { label: "Yes", value: "YES", nextStep: "STEP_3" },
      { label: "No", value: "NO", nextStep: "STEP_6" },
    ],
  },

  STEP_3: {
    id: "STEP_3",
    question:
      "Is cardholder data entered manually via a web-based Virtual Terminal?",
    options: [
      { label: "Yes", value: "YES", nextStep: "STEP_4" },
      { label: "No", value: "NO", nextStep: "STEP_5" },
    ],
  },

  STEP_4: {
    id: "STEP_4",
    question:
      "Virtual Terminal Eligibility Check\n\nAll of the following must apply:\n• Single, dedicated workstation\n• Used only for virtual terminal access\n• Provided by a PCI DSS–compliant service provider\n• No electronic storage of CHD",
    options: [
      {
        label: "Yes – All conditions are met",
        value: "YES",
        result: "SAQ C-VT",
      },
      {
        label: "No – One or more conditions not met",
        value: "NO",
        result: "SAQ D",
      },
    ],
  },

  STEP_5: {
    id: "STEP_5",
    question:
      "How is card data captured?",
    options: [
      {
        label:
          "Option A: Standalone Payment Terminals\n• Dial-out (PSTN) or Cellular only\n• No network access to merchant systems",
        value: "OPTION_A",
        result: "SAQ B",
      },
      {
        label:
          "Option B: Payment Application on Merchant System\n• POS software on PC or server\n• Internet-connected\n• No electronic storage of CHD",
        value: "OPTION_B",
        result: "SAQ C",
      },
      {
        label:
          "Does not match Option A or Option B",
        value: "OTHER",
        result: "SAQ D",
      },
    ],
  },

 STEP_6: {
  id: "STEP_6",
  question:
    "Are all payment functions fully outsourced?\n\nSelect ALL that apply:",
  options: [
    {
      label: "Continue",
      value: "CONTINUE",
      nextStep: "STEP_7", // decision handled by UI logic
    },
  ],
},


  STEP_7: {
    id: "STEP_7",
    question:
      "Can your website impact payment security?\n\nExamples:\n• Payment JavaScript loaded from merchant site\n• Hosted checkout page controlled by merchant\n• Ability to redirect, modify, or inject code",
    options: [
      {
        label: "Yes – Website CAN impact payment security",
        value: "YES",
        result: "SAQ A-EP",
      },
      {
        label: "No – Website CANNOT impact payment security",
        value: "NO",
        result: "SAQ A",
      },
    ],
  },
};
