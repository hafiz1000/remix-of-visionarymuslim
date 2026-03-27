import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const benefits = [
  {
    title: "Reconnect your salah with your life",
    description: "Move from mechanical prayer to genuine conversation with Allah. Understand how your daily work can become worship."
  },
  {
    title: "Make career decisions with clarity",
    description: "Know what questions to ask when choosing work. Align your professional life with your purpose without guilt or confusion."
  },
  {
    title: "Build a family on solid ground",
    description: "For fathers: learn to be present, not just providing. Create a home where deen is caught, not just taught."
  },
  {
    title: "Find your role in something bigger",
    description: "Understand how your unique situation fits into the Ummah's story. Move from feeling helpless to hopeful."
  }
];

export const Benefits = () => {
  const { ref: containerRef, isVisible } = useScrollAnimation(0.1);
  const { ref: parallaxRef, offset } = useParallax(0.1);

  return (
    <section id="benefits" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.2}px)` }}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary-foreground/5 blur-[80px]" />
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">
              What You'll Gain
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-5 sm:mb-6">
              What reading this book will do for you
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </div>
          
          {/* Benefits Grid */}
          <div 
            ref={containerRef}
            className="grid gap-5 sm:gap-6 lg:gap-8 md:grid-cols-2"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group p-6 sm:p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 backdrop-blur-sm transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
              <div className="flex-1">
                <h3 className="font-display text-lg sm:text-xl text-primary-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};