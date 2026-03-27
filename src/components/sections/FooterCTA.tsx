import { PreOrderButton } from "@/components/PreOrderButton";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

export const FooterCTA = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);
  const { ref: parallaxRef, offset } = useParallax(0.08);

  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Premium CTA Section */}
      <div className="hero-premium relative">
        {/* Parallax Background Elements */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        >
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-foreground/5 blur-[80px]" />
        </div>

        <div className="section-padding relative z-10">
          <div 
            ref={ctaRef}
            className={`section-container text-center transition-all duration-700 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              Visionary Life of a Muslim
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 sm:mb-6">
              Ready to Live Through Allah's Lens?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/75 mb-8 sm:mb-10 max-w-xl mx-auto px-4">
              Take the first step towards a life of purpose, clarity, and spiritual connection.
            </p>
            
            <div className="flex items-center justify-center">
              <PreOrderButton 
                size="lg"
                showShareButton={false}
                className="btn-premium text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto"
              >
                Pre-order the book
              </PreOrderButton>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-border/50 bg-secondary/30">
        <div className="section-container py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/hassaan14/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-muted-foreground/30">|</span>
              <a
                href="mailto:hafizhassaan14@gmail.com"
                className="text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Email
              </a>
              <span className="text-muted-foreground/30">|</span>
              <a
                href="https://calendly.com/hafizhassaan14/1-1-session-60-mins"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Book a Session
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hassaan Abdullah. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};