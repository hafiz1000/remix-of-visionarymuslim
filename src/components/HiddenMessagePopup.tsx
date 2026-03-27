import { useState } from "react";
import { Feather } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const HiddenMessagePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Hidden message from the author"
          >
            <Feather className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-float" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full animate-ping" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          sideOffset={8}
          className="w-[calc(100vw-2rem)] max-w-xs sm:max-w-sm bg-gradient-to-br from-background to-primary/5 border-primary/30"
        >
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-display text-sm font-semibold text-primary">
              Hidden Message from the Author
            </h4>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
              Allah Loves you so much and He has planned for you the things that you can never imagine. Just keep going in life with positivity, patience and spend your each second of life in a sense that Allah is watching you and He Loves you, so never try to disobey Him and be content with Allah in every situation :)
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HiddenMessagePopup;
