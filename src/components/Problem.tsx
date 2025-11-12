import { AlertCircle, Users, FileText, Calendar } from "lucide-react";

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
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            האם זה מוכר לכם?
          </h2>
          <p className="text-xl text-muted-foreground">
            רוב העסקים מתמודדים עם אותן בעיות יום יום - ואנחנו כאן כדי לפתור אותן
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-xl flex-shrink-0">
                    <Icon className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
