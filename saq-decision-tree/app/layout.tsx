"use client";

import "./globals.css";
import { DecisionProvider, useDecisionContext } from "@/context/DecisionContext";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import AssessmentHistoryCard from "@/components/AssessmentHistoryCard";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute right-4 top-4 rounded-md border px-3 py-1 text-sm
      border-slate-300 dark:border-slate-600
      bg-white dark:bg-slate-800
      text-slate-700 dark:text-slate-200"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

function LayoutShell({ children }: { children: React.ReactNode }) {
  const { goBack } = useDecisionContext();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ThemeToggle />

      <div className="relative flex gap-6 items-start">
        {/* Back */}
        <button
          onClick={goBack}
          className="absolute -left-20 top-0 text-sm font-medium
          text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
        >
          ← Back
        </button>

        {/* Main */}
        <div className="w-full max-w-2xl">{children}</div>

        {/* History */}
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <DecisionProvider>
            <LayoutShell>{children}</LayoutShell>
          </DecisionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
