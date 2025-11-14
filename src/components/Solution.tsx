import { CheckCircle2, Zap, Target, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Zap,
    title: "אוטומציה מלאה",
    description: "כל המערכות שלכם מדברות אחת עם השנייה ועובדות בסנכרון מושלם"
  },
  {
    icon: Target,
    title: "תהליכים מסודרים",
    description: "כל פעולה, משימה ולקוח מנוהלים במקום אחד עם שליטה מלאה"
  },
  {
    icon: TrendingUp,
    title: "תובנות עסקיות",
    description: "דוחות אוטומטיים ונתונים מסודרים שעוזרים לכם לקבל החלטות נכונות"
  },
  {
    icon: CheckCircle2,
    title: "חיסכון בזמן וכסף",
    description: "הצוות שלכם מתמקד בעבודה החשובה, לא בעבודה ידנית מיותרת"
  }
];

export const Solution = () => {
  const titleAnimation = useScrollAnimation();
  const howItWorksAnimation = useScrollAnimation();
  
  return (
    <section className="section-spacing bg-background relative">
      <div className="absolute inset-x-0 top-0 section-divider" />
      
      <div className="container mx-auto mobile-container">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-16 scroll-fade-in ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2">
            הפתרון שלנו - <span className="text-primary">מערכת מחוברת אחת</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            אנחנו לוקחים את כל הכלים הדיגיטליים שלכם - CRM, אקסל, לוחות שנה, מערכות חיוב, 
            מערכות תקשורת ועוד - ומחברים אותם למערכת אחת מרכזית, חכמה ואוטומטית
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16 mobile-card-spacing">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const cardAnimation = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`bg-accent/50 p-6 md:p-8 rounded-2xl hover:shadow-elegant transition-all border border-primary/10 scroll-scale ${cardAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-xl flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div 
          ref={howItWorksAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/50 p-8 md:p-12 rounded-3xl border border-primary/20 shadow-soft scroll-fade-in ${howItWorksAnimation.isVisible ? 'visible' : ''}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 px-2">
            איך זה עובד?
          </h3>
          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4 md:gap-5 items-start bg-background/50 p-5 md:p-6 rounded-2xl border border-primary/10">
              <div className="bg-primary text-primary-foreground w-12 h-12 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg md:text-base">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg md:text-xl mb-2 leading-snug">שיחת אפיון חינמית</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">מכירים את העסק, הצרכים והמערכות הקיימות שלכם</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 items-start bg-background/50 p-5 md:p-6 rounded-2xl border border-primary/10">
              <div className="bg-primary text-primary-foreground w-12 h-12 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg md:text-base">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg md:text-xl mb-2 leading-snug">מיפוי תהליכים</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">בונים תכנית מפורטת איך לחבר את כל המערכות שלכם</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 items-start bg-background/50 p-5 md:p-6 rounded-2xl border border-primary/10">
              <div className="bg-primary text-primary-foreground w-12 h-12 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg md:text-base">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg md:text-xl mb-2 leading-snug">יישום והטמעה</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">מקימים את המערכת המשולבת, מדריכים את הצוות ומלווים עד להצלחה מלאה</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 section-divider" />
    </section>
  );
};
