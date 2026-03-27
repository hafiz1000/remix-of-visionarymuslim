import { useEffect, useState } from "react";

export const QuietMomentPopIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const sessionKey = "quietMomentShown";
    const alreadyShown = sessionStorage.getItem(sessionKey);
    
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Show after 25-30 seconds (random between the two)
    const showDelay = 25000 + Math.random() * 5000;
    
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem(sessionKey, "true");
      setHasShown(true);
      
      // Hide after 12 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 12000);
      
      return () => clearTimeout(hideTimer);
    }, showDelay);

    return () => clearTimeout(showTimer);
  }, []);

  if (!isVisible || hasShown && !isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <div className="relative max-w-sm group">
        {/* Divine glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-2xl blur-xl opacity-60 animate-glow-pulse"></div>
        
        {/* Card */}
        <div className="relative bg-white/95 dark:bg-card/95 backdrop-blur-xl rounded-2xl p-6 border border-primary/20 shadow-2xl">
          <p className="text-foreground/90 leading-relaxed text-base font-light tracking-wide text-center">
            Allah Loves you so much and He has planned for you the things that you can never imagine. Just keep going in life with positivity, patience and spend your each second of life in a sense that Allah is watching you and He Loves you, so never try to disobey Him :)
          </p>
          
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50"></div>
            <div className="h-1 w-1 rounded-full bg-primary/60 animate-glow-pulse"></div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
