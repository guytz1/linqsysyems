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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-in ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            מה אתם מקבלים?
          </h2>
          <p className="text-xl text-muted-foreground">
            פתרון מקיף שמכסה את כל הצרכים הדיגיטליים של העסק שלכם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const cardAnimation = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`bg-background p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all group border border-border hover:border-primary/30 scroll-scale ${cardAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
