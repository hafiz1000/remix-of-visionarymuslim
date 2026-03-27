import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

export const Acknowledgements = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const { ref: parallaxRef, offset } = useParallax(0.15);

  return (
    <section id="acknowledgements" className="section-padding bg-secondary/40 relative overflow-hidden">
      {/* Parallax Background Element */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      >
        <div className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">
              Gratitude
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
              Acknowledgements
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </div>
          
          {/* Content Card */}
          <div 
            ref={contentRef}
            className={`card-warm p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-5 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                All praise be to Allah, who granted me the capability and tawfeeq to write this book. Without His mercy and guidance, this work would not have been possible.
              </p>
              
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I am deeply grateful to my parents for raising me upon true values, which I firmly believe became a catalyst in bringing me to this point. Their love, sacrifices, and continuous support have been the foundation of my journey.
              </p>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The fikr that defines my vision today was built by the many mentors who challenged me to think for a greater purpose.
              </p>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The inspiration that finally pushed me to sit down and begin writing this book came particularly after reading two works that left a deep mark on me: <span className="text-foreground font-medium">"Know Your Lord"</span> by Hisham Abu Yusuf and <span className="text-foreground font-medium">"Not the Eyes, But the Hearts That Are Blind"</span> by Muhammad Billal Ali Hassani.
              </p>
              
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed italic text-center pt-2">
                There were many other factors and influences along the way and the list would be long, but ultimately, this book is nothing but a blessing from Allah alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};