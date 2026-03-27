import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreOrderModal = ({ isOpen, onClose }: PreOrderModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-md sm:w-[50vw] sm:max-w-lg animate-scale-in">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute -top-2 -left-2 h-8 w-8"
            aria-label="Go back"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-center text-xl font-display pt-4">
            Choose Your Format
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 pt-6">
          <Button 
            variant="hero" 
            size="lg"
            className="h-14 sm:h-16 text-base sm:text-lg font-medium rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              window.open("https://forms.gle/2VxPbAr3XzaX7WYU8", "_blank");
              onClose();
            }}
          >
            Order Spiral Copy
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="h-14 sm:h-16 text-base sm:text-lg font-medium rounded-xl border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
            onClick={() => {
              window.open("https://forms.gle/2VxPbAr3XzaX7WYU8", "_blank");
              onClose();
            }}
          >
            Order Paperback
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
