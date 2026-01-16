"use client";

import "./globals.css";
import { DecisionProvider, useDecisionContext } from "@/context/DecisionContext";

function LayoutShell({ children }: { children: React.ReactNode }) {
  const { result, goBack } = useDecisionContext();

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Wrapper controls card + back button positioning */}
      <div className="relative flex items-start">
        {/* Back Button – left side, parallel to card */}
        {!result && (
          <button
            onClick={goBack}
            className="absolute -left-18 top-0 text-sm font-medium text-gray-600 hover:text-black"
          >
            ← Back
          </button>
        )}

        {/* Card */}
        <div className="w-full max-w-2xl">{children}</div>
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
