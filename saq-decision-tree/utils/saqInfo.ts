import { SAQType } from "@/types/decision";

export const SAQ_INFO: Record<
  SAQType,
  { title: string; description: string }
> = {
  "SAQ A": {
    title: "SAQ A",
    description:
      "Fully outsourced payment processing. Merchant systems do not handle cardholder data and cannot impact payment security.",
  },

  "SAQ A-EP": {
    title: "SAQ A-EP",
    description:
      "Payment processing is outsourced, but the merchant website can impact payment security (e.g., payment scripts, redirects).",
  },

  "SAQ B": {
    title: "SAQ B",
    description:
      "Payments are processed using standalone terminals with no IP connectivity. Merchant systems are not connected to payment processing.",
  },

  "SAQ C": {
    title: "SAQ C",
    description:
      "Payment application is connected to the internet, but no cardholder data is stored electronically.",
  },

  "SAQ C-VT": {
    title: "SAQ C-VT",
    description:
      "Payments are entered manually via a web-based virtual terminal on a single, dedicated workstation with no cardholder data storage.",
  },

  "SAQ D": {
    title: "SAQ D",
    description:
      "Applies to all other scenarios. Merchant systems store, process, or transmit cardholder data, or do not meet criteria for other SAQ types.",
  },
};
