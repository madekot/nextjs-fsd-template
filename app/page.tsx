import { HomePage } from "@/pages/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная | Next.js + FSD Template",
  description: "Оптимальный шаблон архитектуры для масштабируемых приложений",
};

export default function Page() {
  return <HomePage />;
}
