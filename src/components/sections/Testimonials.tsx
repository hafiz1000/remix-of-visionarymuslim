const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "University Student",
    image: "/lovable-uploads/3dd7b006-a0ba-40ba-a28a-85898f6696ee.png",
    rating: 5,
    text: "This book transformed my perspective on faith and purpose. It helped me realize that every action has meaning when viewed through Allah's lens. A must read for every Muslim seeking clarity and direction.",
  },
  {
    name: "Ibrahim Hassan",
    role: "Software Engineer",
    image: "/lovable-uploads/3dd7b006-a0ba-40ba-a28a-85898f6696ee.png",
    rating: 5,
    text: "Hassaan Abdullah's writing speaks to the modern Muslim's struggle. This book bridges the gap between our daily lives and our spiritual aspirations. Deeply insightful and practical.",
  },
  {
    name: "Aisha Rahman",
    role: "Mother and Educator",
    image: "/lovable-uploads/3dd7b006-a0ba-40ba-a28a-85898f6696ee.png",
    rating: 5,
    text: "A beautifully written guide that reignited my sense of purpose. The chapters on intentional living and spiritual awakening brought tears to my eyes. This is more than a book, it's a spiritual companion.",
  },
  {
    name: "Omar Khalil",
    role: "Business Professional",
    image: "/lovable-uploads/3dd7b006-a0ba-40ba-a28a-85898f6696ee.png",
    rating: 5,
    text: "In a world full of distractions, this book helped me refocus on what truly matters. The author's approach is refreshing and deeply rooted in Islamic wisdom. Highly recommended for professionals seeking balance.",
  },
  {
    name: "Fatima Ali",
    role: "Medical Student",
    image: "/lovable-uploads/3dd7b006-a0ba-40ba-a28a-85898f6696ee.png",
    rating: 5,
    text: "This book came at the perfect time in my life. It reminded me that success isn't just about worldly achievements, but about living with divine purpose. Every page resonated with my soul.",
  },
  {
    name: "Yusuf Abdullah",
    role: "Community Leader",
    image: "/lovable-uploads/3dd7b006-a0ba-40ba-a28a-85898f6696ee.png",
    rating: 5,
    text: "A powerful and timely message for our Ummah. Hassaan's insights on leadership through Allah's lens are transformative. This book should be in every Muslim household and community center.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 sm:py-36 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
      {/* Decorative divine light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground animate-fade-in">
              What Readers Are Saying
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <p className="text-foreground/70 text-lg sm:text-xl max-w-2xl mx-auto font-light">
              Join thousands of readers who have been transformed by this powerful message
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Divine glow on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Testimonial Card */}
                <div className="relative bg-white/80 dark:bg-card/60 backdrop-blur-xl rounded-2xl p-8 border border-border/30 shadow-xl h-full flex flex-col">
                  {/* Rating indicator */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/90 leading-relaxed mb-6 flex-grow font-light">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <div className="absolute h-1.5 w-1.5 rounded-full bg-primary/50"></div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-foreground/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-foreground/80 text-lg font-light">
              Be part of this transformative journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
