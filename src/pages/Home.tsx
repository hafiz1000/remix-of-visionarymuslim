import { MainNav } from "@/components/MainNav";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const authorImg = "/lovable-uploads/author-hassaan.jpg";

const Home = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: startRef, isVisible: startVisible } = useScrollAnimation(0.1);
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation(0.1);
  const { ref: waysRef, isVisible: waysVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);

  return (
    <>
      <MainNav />
      <main className="min-h-screen pt-16">
        {/* Hero Section - Human & Warm */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div 
              ref={heroRef}
              className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
            >
              {/* Author Photo */}
              <div className={`order-1 lg:order-1 flex justify-center lg:justify-start transition-all duration-700 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="relative">
                  <img
                    src={authorImg}
                    alt="Hassaan Abdullah"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover ring-4 ring-primary/20"
                    style={{ 
                      boxShadow: '0 20px 40px -12px hsl(210 25% 15% / 0.15)'
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`order-2 lg:order-2 text-center lg:text-left transition-all duration-700 delay-150 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-foreground mb-4 sm:mb-6 leading-tight">
                  Helping Muslims make sense of work, worship, and the life in between.
                </h1>
                
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl">
                  For students unsure about their next step. For professionals feeling spiritually distant. For fathers stretched between work and family.
                </p>

                <p className="text-sm sm:text-base text-foreground/80 mb-6 sm:mb-8">
                  Assalamu Alaikum, I'm <span className="font-semibold text-foreground">Hassaan Abdullah</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Start Here Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div 
              ref={startRef}
              className={`max-w-3xl mx-auto transition-all duration-700 ${
                startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-6 sm:mb-8 text-center">
                This space is for you if...
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  "You're a Muslim trying to figure out how to align your career with your deen",
                  "You feel busy, guilty, and spiritually distant, and don't know where to start",
                  "You want guidance rooted in Quran and Sunnah, not corporate advice in Islamic packaging",
                  "You're searching for someone who understands the struggle, not just the theory"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card border border-border/40 transition-all duration-500 ${
                      startVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 sm:mt-2.5 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet Hassaan Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div 
              ref={aboutRef}
              className={`max-w-3xl mx-auto transition-all duration-700 ${
                aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-6 text-center">
                A bit about me
              </h2>
              
              <div className="card-warm p-6 sm:p-8 md:p-10">
                <div className="prose max-w-none">
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed mb-3 sm:mb-4">
                    In 2013, I started memorizing the Quran. By 2018, I had a Hifz certificate, good grades, and a growing career, but something felt hollow. I was doing all the "right things" but felt spiritually numb, running on autopilot.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    That dissonance led me on a journey I didn't expect. I started questioning everything: Why am I working? What does success actually mean as a Muslim? How do I balance dunya responsibilities with my akhirah?
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    I don't have all the answers, but I've spent years sitting with these questions, and now I help others do the same. This work is a continuous learning for me too.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Currently, I work as an Associate Product Manager at{" "}
                    <a 
                      href="https://ansari.chat/welcome" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Ansari Project
                    </a>
                    , alongside{" "}
                    <a 
                      href="https://www.linkedin.com/in/waleedkadous/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Chief Scientist Waleed Kadous
                    </a>
                    . Ansari is an Islamic knowledge assistant providing accurate, evidence-based answers from the Sunni tradition, citing Quran, authentic Hadith, and classical and contemporary scholars in multiple languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Work Together */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div 
              ref={waysRef}
              className="max-w-4xl mx-auto"
            >
              <div className={`transition-all duration-700 ${
                waysVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-3 sm:mb-4 text-center">
                  Ways we can work together
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
                  Whether you prefer to learn at your own pace or want personal guidance, there's a path here for you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Book Card */}
                <Link
                  to="/book"
                  className={`group card-warm p-6 sm:p-8 flex flex-col transition-all duration-500 ${
                    waysVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <h3 className="font-display text-lg sm:text-xl text-foreground mb-3">
                    The Book
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-1 leading-relaxed">
                    Understand how to choose work that doesn't pull you away from Allah. A guide for Muslims who feel busy but spiritually distant.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary transition-all">
                    Learn more →
                  </span>
                </Link>

                {/* Workshops Card */}
                <Link
                  to="/workshops"
                  className={`group card-warm p-6 sm:p-8 flex flex-col transition-all duration-500 ${
                    waysVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <h3 className="font-display text-lg sm:text-xl text-foreground mb-3">
                    Workshops
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-1 leading-relaxed">
                    Group sessions on career clarity, character building, and finding purpose. Real conversations, not lectures.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary transition-all">
                    View workshops →
                  </span>
                </Link>

                {/* 1:1 Card */}
                <Link
                  to="/workshops#session-details"
                  className={`group card-warm p-6 sm:p-8 flex flex-col sm:col-span-2 md:col-span-1 transition-all duration-500 ${
                    waysVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  <h3 className="font-display text-lg sm:text-xl text-foreground mb-3">
                    1:1 Mentorship
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-1 leading-relaxed">
                    For those ready for deeper work. Personal guidance on your specific questions about career, purpose, and faith.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary transition-all">
                    Book a session →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Simple CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div 
            ref={ctaRef}
            className={`section-container text-center transition-all duration-700 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
              Not sure where to start?
            </h2>
            <p className="text-sm sm:text-base text-primary-foreground/80 mb-6 sm:mb-8 max-w-xl mx-auto">
              Book a 60-minute call. A conversation about where you are and what might help.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://calendly.com/hafizhassaan14/1-1-session-60-mins"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 rounded-xl px-6 sm:px-8 w-full sm:w-auto"
                >
                  Book a 60-minute call
                </Button>
              </a>
              <Link to="/book">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-6 sm:px-8 w-full sm:w-auto"
                >
                  Explore the book
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 sm:py-8 bg-primary border-t border-primary-foreground/10">
          <div className="section-container text-center">
            <p className="text-xs sm:text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Hassaan Abdullah. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;