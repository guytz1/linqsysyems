import { AlertCircle, Users, FileText, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: Users,
    title: "נתונים מפוזרים בעשרות מערכות",
    description: "אקסל, CRM, לוחות שנה, אימיילים - הכל במקומות שונים ואף אחד לא רואה את התמונה המלאה"
  },
  {
    icon: FileText,
    title: "עבודה ידנית מיותרת",
    description: "העתקת נתונים, עדכונים כפולים, טעויות אנוש - בזבוז זמן שעולה לכם יקר"
  },
  {
    icon: Calendar,
    title: "אין שליטה בתהליכים",
    description: "לידים נופלים, משימות נשכחות, והצוות לא יודע מי אחראי על מה"
  },
  {
    icon: AlertCircle,
    title: "החלטות בלי מידע",
    description: "אין לכם נתונים מסודרים, דוחות מעודכנים או תובנות שיעזרו לכם לקחת החלטות נכונות"
  }
];

export const Problem = () => {
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
            האם זה מוכר לכם?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            רוב העסקים מתמודדים עם אותן בעיות יום יום - ואנחנו כאן כדי לפתור אותן
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mobile-card-spacing">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const cardAnimation = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`bg-background p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all border border-border scroll-scale ${cardAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-xl flex-shrink-0">
                    <Icon className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug">{problem.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 section-divider" />
    </section>
  );
};
