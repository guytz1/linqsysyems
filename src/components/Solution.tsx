import { CheckCircle2, Zap, Target, TrendingUp } from "lucide-react";

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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            הפתרון שלנו - <span className="text-primary">מערכת מחוברת אחת</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            אנחנו לוקחים את כל הכלים הדיגיטליים שלכם - CRM, אקסל, לוחות שנה, מערכות חיוב, 
            מערכות תקשורת ועוד - ומחברים אותם למערכת אחת מרכזית, חכמה ואוטומטית
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-accent/50 p-8 rounded-2xl hover:shadow-elegant transition-all border border-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-xl flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/50 p-12 rounded-3xl border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            איך זה עובד?
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">שיחת אפיון חינמית</h4>
                <p className="text-muted-foreground">מכירים את העסק, הצרכים והמערכות הקיימות שלכם</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">מיפוי תהליכים</h4>
                <p className="text-muted-foreground">בונים תכנית מפורטת איך לחבר את כל המערכות שלכם</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">יישום והטמעה</h4>
                <p className="text-muted-foreground">מקימים את המערכת המשולבת, מדריכים את הצוות ומלווים עד להצלחה מלאה</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
