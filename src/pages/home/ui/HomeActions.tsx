"use client";

import { Button } from "@/shared/ui/Button";

export function HomeActions() {
  const handleAlert = () => {
    alert(
      "Клик сработал! Страница осталась серверной, а кнопка стала интерактивной."
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full mt-4">
      <Button onClick={handleAlert}>Проверить компонент из Shared</Button>
    </div>
  );
}
