import { Button } from "@/components/ui/button";

interface PreOrderButtonProps {
  className?: string;
  size?: "sm" | "default" | "lg";
  children?: React.ReactNode;
  showShareButton?: boolean;
}

export const PreOrderButton = ({ 
  className, 
  size = "sm", 
  children = "Pre Order",
  showShareButton = true 
}: PreOrderButtonProps) => {

  const handlePreOrder = () => {
    window.open("https://forms.gle/2VxPbAr3XzaX7WYU8", "_blank");
  };

  const handleShare = () => {
    const message = `Check out this amazing book: "Visionary Life of a Muslim - Living Through Allah's Lens" - A comprehensive guide to come out of your surface level living and Rise with Purpose. ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {showShareButton ? (
        <div className="flex items-center justify-center gap-2">
          <Button 
            variant="hero" 
            size={size}
            onClick={handlePreOrder}
            className={className}
          >
            {children}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleShare}
            className="h-10 w-10 border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Share this page"
          >
            <span className="text-sm">↗</span>
          </Button>
        </div>
      ) : (
        <Button 
          variant="hero" 
          size={size}
          onClick={handlePreOrder}
          className={className}
        >
          {children}
        </Button>
      )}
    </>
  );
};
