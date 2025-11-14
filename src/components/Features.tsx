import { Database, Workflow, BarChart3, Headphones, Shield, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Database,
    title: "ניהול CRM מתקדם",
    description: "מעקב אחר לקוחות, לידים והזדמנויות עסקיות במקום אחד"
  },
  {
    icon: Workflow,
    title: "אוטומציות חכמות",
    description: "תהליכים אוטומטיים שחוסכים שעות עבודה כל יום"
  },
  {
    icon: BarChart3,
    title: "דוחות ותובנות",
    description: "דשבורדים מתקדמים שמראים לכם את מצב העסק בזמן אמת"
  },
  {
    icon: Sparkles,
    title: "אינטגרציות מלאות",
    description: "חיבור לכל הכלים שאתם כבר משתמשים בהם"
  },
  {
    icon: Shield,
    title: "אבטחה ואמינות",
    description: "המידע שלכם מאובטח ומגובה בכל רגע"
  },
  {
    icon: Headphones,
    title: "תמיכה מלאה",
    description: "צוות מקצועי שתמיד פה כדי לעזור ולתמוך"
  }
];

export const Features = () => {
  const titleAnimation = useScrollAnimation();
  
  return (
    <section className="section-spacing bg-muted/30 relative">
      <div className="absolute inset-x-0 top-0 section-divider" />
      
      <div className="container mx-auto mobile-container">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-16 scroll-fade-in ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2">
            מה אתם מקבלים?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            פתרון מקיף שמכסה את כל הצרכים הדיגיטליים של העסק שלכם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mobile-card-spacing">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const cardAnimation = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`bg-background p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all group border border-border hover:border-primary/30 scroll-scale ${cardAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
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
