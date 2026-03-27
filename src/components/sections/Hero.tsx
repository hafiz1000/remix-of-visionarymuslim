import { PreOrderButton } from "@/components/PreOrderButton";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const bookImg = "/lovable-uploads/cc77c5db-6fee-4f6c-892b-0e5e4579aa86.png";

export const Hero = () => {
  const { ref: contentRef, isVisible } = useScrollAnimation(0.1);
  const { ref: parallaxRef, offset } = useParallax(0.15);

  return (
    <header id="hero" className="hero-premium min-h-[90vh] flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      >
        {/* Large decorative circles */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] floating" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary-foreground/5 blur-[80px]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="section-container relative z-10 py-12 sm:py-16 lg:py-20 flex-1 flex items-center">
        <div 
          ref={contentRef}
          className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Content */}
          <div className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 mb-6 sm:mb-8">
              <span className="text-sm font-medium text-primary-foreground/90">Now available for pre-order</span>
            </div>

            {/* Book Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-2 sm:mb-3 leading-tight">
              Visionary Life of a Muslim
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-accent font-medium mb-6 sm:mb-8">
              Living Through Allah's Lens
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              For Muslims who feel busy, guilty, and spiritually distant and don't know where to start. This book will In sha Allah push you to come out of your surface-level living, to Rise with Purpose, and make your work, family, and worship feel like one coherent life.
            </p>
            
            <p className="text-sm text-primary-foreground/60 mb-8 sm:mb-10">
              By <span className="font-medium text-primary-foreground/80">Hassaan Abdullah</span>
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <PreOrderButton 
                size="lg" 
                className="btn-premium text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5"
              >
                Pre-order now
              </PreOrderButton>
            </div>
          </div>

          {/* Book Image with Premium Effects */}
          <div className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div 
              className="relative max-w-[220px] sm:max-w-xs lg:max-w-sm floating"
              style={{ 
                transform: `translateY(${offset * -0.1}px)`,
                animationDuration: '8s'
              }}
            >
              {/* Glow behind book */}
              <div className="absolute -inset-8 sm:-inset-12 bg-accent/20 rounded-[40px] blur-[60px]" />
              
              {/* Book image */}
              <img
                src={bookImg}
                alt="Visionary Life of a Muslim book cover"
                loading="eager"
                className="relative w-full h-auto rounded-xl"
                style={{ 
                  filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4))',
                }}
              />
              
              {/* Subtle reflection */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-gradient-to-t from-transparent to-accent/10 blur-xl rounded-full" />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator - separate section below main content */}
      <div className={`relative z-10 py-6 sm:py-8 flex justify-center transition-all duration-1000 delay-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <button 
          onClick={() => {
            const aboutSection = document.getElementById('about-book');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Scroll to learn more"
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase font-medium">Discover</span>
          <span className="text-base sm:text-lg animate-bounce">↓</span>
        </button>
      </div>
    </header>
  );
};