import { PreOrderButton } from "./PreOrderButton";
import { cn } from "@/lib/utils";

interface EmailCaptureFormProps {
  className?: string;
  variant?: "inline" | "stacked";
}

export const EmailCaptureForm = ({ className, variant = "inline" }: EmailCaptureFormProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "gap-3",
          variant === "inline"
            ? "flex w-full flex-wrap items-center justify-center md:justify-start"
            : "flex w-full justify-center"
        )}
      >
        <PreOrderButton />
      </div>
    </div>
  );
};