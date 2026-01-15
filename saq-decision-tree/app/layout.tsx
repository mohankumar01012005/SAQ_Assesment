import "./globals.css";
import { DecisionProvider } from "@/context/DecisionContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DecisionProvider>
          <main className="min-h-screen w-full flex items-center justify-center">
            <div className="w-full max-w-3xl px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </main>
        </DecisionProvider>
      </body>
    </html>
  );
}
