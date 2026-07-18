import { HomeActions } from "./HomeActions";

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900">
      <main className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          Next.js + FSD Шаблон
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          Проект успешно развернут. Архитектура изолирована в папке{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-pink-600">
            src/
          </code>
          , а системный роутер находится в корне.
        </p>
        <HomeActions />
      </main>
    </div>
  );
}
