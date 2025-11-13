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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-in ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            כך אנחנו רוצים שתרגישו
          </h2>
          <p className="text-xl text-muted-foreground">
            זו לא רק טכנולוגיה - זו תחושה של שליטה, בהירות וביטחון
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {feelings.map((feeling, index) => {
            const cardAnimation = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`bg-accent/50 p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all border border-primary/10 scroll-scale ${cardAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-4">{feeling.label}</h3>
                </div>
                <p className="text-foreground leading-relaxed text-lg">
                  {feeling.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
