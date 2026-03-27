import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showPoetry, setShowPoetry] = useState(false);

  useEffect(() => {
    // Show poetry after 5 seconds
    const poetryTimer = setTimeout(() => {
      setShowPoetry(true);
    }, 5000);

    // Hide entire screen after 11 seconds (5s first text + 6s poetry)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 11000);

    return () => {
      clearTimeout(poetryTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary/10 via-accent/5 to-background animate-divine-fade-out">
        {/* Centered content */}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary/10 via-accent/5 to-background flex items-center justify-center animate-divine-fade-in">
      <div className="text-center px-6 max-w-4xl">
        <div className="mb-8">
          <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-8 shadow-lg shadow-primary/20"></div>
        </div>
        {!showPoetry ? (
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight flex flex-col items-center justify-center">
            <span>Something Beneficial is loading, <span className="text-primary">In Shaa Allah</span></span>
          </h1>
        ) : (
          <div className="space-y-3 animate-divine-fade-in">
            <p className="text-2xl md:text-3xl font-bold text-primary leading-relaxed" dir="rtl">
              وقتِ فُرصت ہے کہاں، کام ابھی باقی ہے
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary leading-relaxed" dir="rtl">
              نورِ توحید کا اِتمام ابھی باقی ہے
            </p>
          </div>
        )}
      </div>
    </div>
  );
};