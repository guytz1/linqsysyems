import { Heart, Clock, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const feelings = [
  {
    label: "שליטה ובהירות",
    content: "אנחנו רוצים שתקומו בבוקר ותדעו בדיוק מה קורה בעסק שלכם. כל הנתונים במקום אחד, כל התהליכים ברורים, ותחושה של שליטה מלאה.",
    icon: "control"
  },
  {
    label: "זמן לדברים החשובים",
    content: "שתרגישו שהטכנולוגיה עובדת בשבילכם, לא אתם בשבילה. שתוכלו להתמקד בחזון, בלקוחות ובצמיחה - לא בעדכונים ידניים ובאקסלים.",
    icon: "time"
  },
  {
    label: "ביטחון וגיבוי",
    content: "שתדעו שיש לכם שותף טכנולוגי שמבין אתכם. שאתם לא לבד מול האתגרים הדיגיטליים, ושיש על מי לסמוך.",
    icon: "trust"
  }
];

export const Testimonials = () => {
  const titleAnimation = useScrollAnimation();
  
  return (
    <section className="section-spacing bg-background relative">
      <div className="absolute inset-x-0 top-0 section-divider" />
      
      <div className="container mx-auto mobile-container">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-16 scroll-fade-in ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2">
            כך אנחנו רוצים שתרגישו
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            זו לא רק טכנולוגיה - זו תחושה של שליטה, בהירות וביטחון
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mobile-card-spacing">
          {feelings.map((feeling, index) => {
            const cardAnimation = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`bg-accent/50 p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all border border-primary/10 scroll-scale ${cardAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="mb-5 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4 leading-snug">{feeling.label}</h3>
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  {feeling.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 section-divider" />
    </section>
  );
};
