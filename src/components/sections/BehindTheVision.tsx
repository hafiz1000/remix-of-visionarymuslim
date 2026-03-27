import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

export const BehindTheVision = () => {
  const { ref: storytimeRef, isVisible: storytimeVisible } = useScrollAnimation(0.1);
  const { ref: parallaxRef, offset } = useParallax(0.1);

  return (
    <section id="behind-the-vision" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax Background Element */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.2}px)` }}
      >
        <div className="absolute top-1/4 left-0 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            storytimeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">
              The Story
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
              How This Book Came to Be
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </div>

          {/* Story Content */}
          <div
            ref={storytimeRef}
            className={`transition-all duration-700 delay-200 ${
              storytimeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Opening Quote */}
            <div className="relative mb-10 sm:mb-12 text-center">
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 font-display italic max-w-2xl mx-auto">
                "Why am I living such a surface level life that has little to do with the bigger goal and mission of existence?"
              </p>
            </div>

            {/* Story Cards */}
            <div className="space-y-6 sm:space-y-8">
              {/* Card 1 */}
              <div className="card-warm p-6 sm:p-8 lg:p-10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="hidden sm:flex flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 items-center justify-center">
                    <span className="font-display text-2xl text-primary font-semibold">2013</span>
                  </div>
                  <div className="flex-1">
                    <p className="sm:hidden text-sm font-semibold text-accent mb-2">2013</p>
                    <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                      Alhamdulillah, this core thought had existed in some form since 2013 when I began memorizing the Quran after 5th grade, but it consciously got matured and developed in 2018 by the taufeeq of Allah. I began asking myself while I was going to school everyday in the bus, why am I living such a surface level life that has little to do with the bigger goal and mission of existence?
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card-warm p-6 sm:p-8 lg:p-10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="hidden sm:flex flex-shrink-0 w-20 h-20 rounded-2xl bg-accent/10 items-center justify-center">
                    <span className="font-display text-2xl text-accent font-semibold">2018</span>
                  </div>
                  <div className="flex-1">
                    <p className="sm:hidden text-sm font-semibold text-accent mb-2">2018 to 2020</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      I often found myself observing my fellow students, family members, teachers, and others around me, realizing how easily we take this beautiful life for granted. Life itself is an indescribable blessing from Allah. After Allah, credit goes to my parents, who raised me with Islamic moral principles, and more importantly, they practiced them throughout their lives.
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      That concern led me to a defining period between 2018 and 2020 while I was in Military College. It was then that I began to internalize the concept that we only get one chance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Highlighted */}
              <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-primary text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                <p className="relative text-sm sm:text-base leading-relaxed mb-4">
                  Each night, my heart and mind would ask me: "Hassaan, where do you want to see yourself among the trillions of people who have ever lived, on the Day of Judgment? What have you done or envisioned to do with sincere intention for the sake of Allah to be noble in His sight?"
                </p>
                <p className="relative text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
                  "Allah wants to see you live for Him only, in this whole life as per your maximum potential that Allah has given you, are you doing or not?"
                </p>
              </div>

              {/* Card 4 */}
              <div className="card-warm p-6 sm:p-8 lg:p-10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="hidden sm:flex flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 items-center justify-center">
                    <span className="font-display text-2xl text-primary font-semibold">2025</span>
                  </div>
                  <div className="flex-1">
                    <p className="sm:hidden text-sm font-semibold text-accent mb-2">2020 to 2025</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      From 2020 to 2025, I experienced the most crucial journey of my life, with countless hard moments that pushed me to articulate my thoughts, and Alhamdulillah, my entire perspective of life changed. Allah blessed me with amazing individuals, mentors, and friends, who became catalysts, directly and indirectly, in motivating me and giving clarity to take practical steps.
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      But keep in mind that the core source for me was Quran and Seerah of our beloved Prophet Muhammad ﷺ (The most sincere and concerned man for all of us, ever lived in this whole universe).
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing Message */}
              <div className="text-center py-8 sm:py-10">
                <p className="text-base sm:text-lg text-foreground font-medium mb-4 max-w-2xl mx-auto">
                  Please, wake up. Believe me when I say this as a brother: we are not perfect, but don't belittle yourself.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  If you even have a little bit of concern that you're not walking the right path, that's enough In sha Allah, to begin the change.
                </p>
              </div>

              {/* Final Card - Italic closing */}
              <div className="card-warm p-6 sm:p-8 lg:p-10 text-center">
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed italic max-w-2xl mx-auto">
                  "Every time I was writing and proofreading this book, I found myself in tears on almost every page. I don't know why, but I hope, In sha Allah, this will bring a change in someone's life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};