import { DecisionStep } from "@/types/decision";
import AnswerButton from "./AnswerButton";

type Props = {
  step: DecisionStep;
};

export default function QuestionCard({ step }: Props) {
  return (
    <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 md:p-8">
      <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3">
        PCI DSS SAQ Assessment
      </p>

      <div className="text-slate-900 text-base sm:text-lg font-semibold whitespace-pre-line mb-5 sm:mb-6">
        {step.question}
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {step.options.map((option) => (
          <AnswerButton key={option.value} option={option} />
        ))}
      </div>
    </section>
  );
}
