import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const features = [
  {
    title: "Rooted in Quran & Seerah",
    description: "Drawing from authentic sources to bridge knowledge and real world application"
  },
  {
    title: "For Every Role",
    description: "Whether you're a student, parent, professional, or community leader"
  },
  {
    title: "Practical Frameworks",
    description: "Decision making, character development, and social engagement tools"
  },
  {
    title: "Spiritual Connection",
    description: "Maintain your connection with Allah while excelling in modern life"
  }
];

export const AboutBook = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const { ref: parallaxRef, offset } = useParallax(0.1);

  return (
    <section id="about-book" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax Background Element */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.2}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">
              About the Book
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-2 sm:mb-3">
              Visionary Life of a Muslim
            </h2>
            <p className="text-base sm:text-lg text-accent font-medium mb-4 sm:mb-6">
              Living Through Allah's Lens
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </div>
          
          {/* Main Content Card */}
          <div 
            ref={contentRef}
            className={`card-warm p-6 sm:p-8 md:p-10 lg:p-12 mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed mb-5 sm:mb-6">
                <span className="font-display text-xl sm:text-2xl md:text-3xl text-foreground font-semibold block mb-3">This book goes beyond spirituality</span>
                towards a practical and purpose driven existence rooted in faith. This book calls readers to understand the individual and collective issues on a societal level at every stage of life that are the root cause of the current state of the Muslim Ummah and how to adopt a complete Islamic worldview including personal growth, social responsibility, and leadership within the divine framework.
              </p>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                It pushes Muslims to embody the character of the Prophet (SAW) in their daily roles, whether as students, parents, professionals, or community members, giving them the tools to become active contributors to positive change and revival in today's world.
              </p>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Drawing from Quranic wisdom and prophetic guidance, this work addresses the gap between Islamic knowledge and its real-world application, providing practical frameworks for decision-making, character development, social engagement, building strong families, and leading communities toward justice and progress.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700 delay-400 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-5 sm:p-6 rounded-2xl bg-secondary/50 border border-border/30 hover:border-accent/30 hover:bg-secondary/80 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-base sm:text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};