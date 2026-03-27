import { Button } from "@/components/ui/button";
import { WorkshopsNav } from "@/components/WorkshopsNav";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Workshops() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.1);
  const { ref: workshopsRef, isVisible: workshopsVisible } = useScrollAnimation(0.1);
  const { ref: sessionRef, isVisible: sessionVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);

  const services = [
    { title: "AI Product Management", description: "Strategic AI implementation and product development" },
    { title: "Career Counselling", description: "Career guidance rooted in Islamic principles" },
    { title: "Character Building", description: "Islamic character development and personal growth" },
    { title: "LinkedIn Training", description: "Professional branding and networking" },
    { title: "Productivity Mastery", description: "Time and energy management for impactful living" },
    { title: "Thought Leadership", description: "Guiding vision and purpose-driven living" },
  ];

  const workshops = [
    { institution: "KNCT", logo: "/lovable-uploads/logo-knct.png" },
    { institution: "Quaid-i-Azam University Islamabad", logo: "/lovable-uploads/logo-qau.png" },
    { institution: "International Open University", logo: "/lovable-uploads/logo-iou.png" },
  ];

  const workshopImages = [
    { src: "/lovable-uploads/workshop-3.jpg", alt: "LinkedIn Workshop at KNCT" },
    { src: "/lovable-uploads/workshop-2.jpg", alt: "Workshop at Quaid-i-Azam University" },
    { src: "/lovable-uploads/workshop-nust.png", alt: "At NUST Business School" },
  ];

  return (
    <>
      <WorkshopsNav />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section id="hero-workshops" className="section-padding bg-background">
          <div 
            ref={heroRef}
            className={`section-container text-center transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-3 sm:mb-4">
              Workshops & Consulting
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6">
              Hassaan Abdullah
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Empowering Muslim professionals to align their careers with purpose, 
              rooted in the Quran & Sunnah
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="expertise" className="section-padding bg-secondary/30">
          <div className="section-container">
            <div 
              ref={servicesRef}
              className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-2 sm:mb-3">
                What I Offer
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
                Areas of Expertise
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`card-professional p-6 sm:p-8 text-center transition-all duration-500 ${
                    servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Workshops Section */}
        <section id="past-workshops" className="section-padding bg-background">
          <div className="section-container">
            <div 
              ref={workshopsRef}
              className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
                workshopsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-2 sm:mb-3">
                Track Record
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4">
                Past Workshops
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Delivered workshops at leading institutions across Pakistan
              </p>
            </div>
            
            {/* Logo Carousel */}
            <div className={`overflow-hidden mb-8 sm:mb-12 transition-all duration-700 delay-200 ${
              workshopsVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex gap-8 sm:gap-16 animate-scroll-logos">
                {[...workshops, ...workshops, ...workshops].map((workshop, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center p-3 sm:p-4"
                  >
                    <img 
                      src={workshop.logo} 
                      alt={workshop.institution}
                      loading="lazy"
                      className="h-8 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Workshop Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {workshopImages.map((image, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-500 ${
                    workshopsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 400}ms` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <p className="text-primary-foreground text-xs sm:text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1:1 Session Details */}
        <section id="session-details" className="section-padding bg-secondary/30">
          <div className="section-container">
            <div 
              ref={sessionRef}
              className="max-w-4xl mx-auto"
            >
              <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
                sessionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-2 sm:mb-3">
                  Personal Mentorship
                </p>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
                  1:1 Sessions
                </h2>
              </div>

              <div className={`card-professional p-6 sm:p-8 md:p-10 transition-all duration-700 delay-200 ${
                sessionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="prose max-w-none">
                  <p className="text-sm sm:text-base text-foreground/90 mb-4 sm:mb-6">
                    <span className="font-semibold">60-minute personalized sessions</span> designed for serious learners seeking purpose-driven guidance rooted in Islamic principles.
                  </p>

                  {/* Fi Sabeelillah Notice */}
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-center">
                    <p className="text-accent font-display text-base sm:text-lg mb-1 sm:mb-2">
                      Fi Sabeelillah
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      These sessions are offered free of charge, seeking only the pleasure of Allah. No fees, no conditions, just sincere guidance for those who seek it.
                    </p>
                  </div>

                  {/* Focus Areas */}
                  <h3 className="font-display text-base sm:text-lg text-foreground mb-3 sm:mb-4">
                    Session Focus Areas
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-muted-foreground list-none pl-0">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base"><strong className="text-foreground">Purpose & Vision:</strong> Defining your role as a Muslim and building a life roadmap</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base"><strong className="text-foreground">Career Growth:</strong> Finding the right path for students, job-seekers, or professionals</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base"><strong className="text-foreground">Parenting for Fathers:</strong> Raising principled, visionary, and resilient children</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base"><strong className="text-foreground">Leadership:</strong> Becoming a leader grounded in Islamic values</span>
                    </li>
                  </ul>

                  {/* Details */}
                  <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-2">
                    <p><strong className="text-foreground">Duration:</strong> 60 minutes</p>
                    <p><strong className="text-foreground">Format:</strong> Online (Zoom / Google Meet / MS Teams)</p>
                    <p><strong className="text-foreground">Audience:</strong> Muslim males (teens to adults)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-primary text-primary-foreground section-padding">
          <div 
            ref={ctaRef}
            className={`section-container text-center transition-all duration-700 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              Ready to Transform Your Life?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Book a personalized 1:1 session or invite me to your institution
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://calendly.com/hafizhassaan14/1-1-session-60-mins"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Book 1:1 Session
                </Button>
              </a>
              
              <a 
                href="mailto:hafizhassaan14@gmail.com?subject=Workshop Invitation"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto"
                >
                  Invite for Workshop
                </Button>
              </a>
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
}