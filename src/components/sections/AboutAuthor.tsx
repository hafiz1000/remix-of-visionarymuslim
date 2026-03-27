import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const authorImg = "/lovable-uploads/author-hassaan.jpg";

export const AboutAuthor = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const { ref: parallaxRef, offset } = useParallax(0.12);

  return (
    <section id="about-author" className="section-padding bg-secondary/40 relative overflow-hidden">
      {/* Parallax Background Element */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.25}px)` }}
      >
        <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">
              Meet the Author
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
              Hassaan Abdullah
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </div>
          
          {/* Content */}
          <div 
            ref={contentRef}
            className={`card-warm p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-14">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72">
                    <img
                      src={authorImg}
                      alt="Hassaan Abdullah"
                      loading="lazy"
                      className="w-full h-full rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-accent/30 transition-all duration-500"
                      style={{ 
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed mb-5 sm:mb-6">
                  Hassaan Abdullah is a thought leader, mobilizing individuals and communities to live with intention, using faith as their driving force to reclaim their roles as representatives of Allah on earth, leading with purpose, integrity, and a clear vision for a better Aakhirah.
                </p>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                  Rather than surface-level living, he encourages Muslims to strive towards excellence, to come out of their comfort zone and to work up to their maximum potential toward life's true mission.
                </p>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  His writing reflects years of studying how Islamic principles can address current global issues, from personal development to social justice.
                </p>
                
                <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    Author
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                    Thought Leader
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-secondary text-foreground border border-border/50">
                    AI Product Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};