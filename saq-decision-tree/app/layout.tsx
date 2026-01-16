"use client";

import "./globals.css";
import { DecisionProvider, useDecisionContext } from "@/context/DecisionContext";
import AssessmentHistoryCard from "@/components/AssessmentHistoryCard";

function LayoutShell({ children }: { children: React.ReactNode }) {
  const { goBack } = useDecisionContext();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex gap-6 items-start">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="absolute -left-18 top-0 text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back
        </button>

        {/* Main Card */}
        <div className="w-full max-w-2xl">{children}</div>

        {/* History Card (RIGHT SIDE) */}
        <AssessmentHistoryCard />
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DecisionProvider>
          <LayoutShell>{children}</LayoutShell>
        </DecisionProvider>
      </body>
    </html>
  );
}
