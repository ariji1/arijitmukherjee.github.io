import { Moon, Sun } from "lucide-react";
import { Button } from "./button";

export function ThemeToggle({ darkMode, onToggle }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="fixed top-4 right-4"
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
