import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import linqIcon from "@/assets/linq-icon.jpg";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src={linqIcon}
                alt="Linq Systems"
                className="h-10 object-contain rounded-lg"
              />
              <span className="font-bold text-lg text-foreground">
                Linq Systems
              </span>
            </button>
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="gap-2"
            >
              חזרה לדף הבית
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              מדיניות פרטיות
            </h1>
            <p className="text-muted-foreground mb-8">עודכן לאחרונה: 2025</p>

            <div className="space-y-8 text-right">
              <p className="text-foreground/90 text-lg">
                האתר והשירותים של Linq Systems מכבדים את פרטיות המשתמשים. מסמך זה
                מסביר איזה מידע נאסף, כיצד הוא נאסף וכיצד אנו שומרים עליו. השימוש
                באתר מהווה הסכמה למדיניות זו.
              </p>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  איסוף מידע
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      מידע שנמסר על ידי המשתמש:
                    </p>
                    <p className="text-foreground/80">
                      שם, טלפון, אימייל, שם העסק, תיאור שירות או מידע אחר שנמסר
                      בטפסים באתר.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      מידע טכני:
                    </p>
                    <p className="text-foreground/80">
                      נתוני גלישה כגון כתובת IP, סוג דפדפן, סוג מכשיר, עמודים
                      שנצפו וזמני גלישה. מידע זה אינו מזהה אישית.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  מטרות איסוף המידע
                </h2>
                <p className="text-foreground/80">
                  המידע משמש אותנו לצורך יצירת קשר, מתן שירותי אפיון ויישום CRM,
                  שליחת הצעות מחיר, תיאום פגישות, שיפור האתר, ניהול לקוחות ועמידה
                  בדרישות חוקיות.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  שימוש בעוגיות
                </h2>
                <p className="text-foreground/80">
                  האתר משתמש בעוגיות (Cookies) לשיפור חוויית המשתמש, ניתוח תנועה
                  ושיפור ביצועים. ניתן לחסום עוגיות דרך הגדרות הדפדפן.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  מסירת מידע לצדדים שלישיים
                </h2>
                <p className="text-foreground/80">
                  איננו מוכרים מידע אישי. ייתכן ונשתף מידע רק עם ספקים הדרושים
                  להפעלת השירותים שלנו, כגון: Monday.com, Make.com, Google
                  Workspace, שירותי אחסון, יועצים מקצועיים וגורמי רגולציה במקרה
                  הצורך.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  אבטחת מידע
                </h2>
                <p className="text-foreground/80">
                  אנו מפעילים אמצעי אבטחה מקובלים, כולל הרשאות מוגבלות, מערכות
                  מאובטחות ואמצעי הגנה טכנולוגיים. עם זאת, לא ניתן להבטיח הגנה
                  מוחלטת מפני פריצות.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  שמירת מידע
                </h2>
                <p className="text-foreground/80">
                  המידע נשמר כל עוד יש צורך בו לצורך טיפול בפנייה, מתן שירות,
                  ניהול לקוחות ועמידה בדרישות החוק. ניתן לבקש מחיקה של מידע אישי.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  זכויות המשתמש
                </h2>
                <p className="text-foreground/80 mb-3">
                  המשתמש רשאי לבקש עיון במידע, תיקון, מחיקה או הסרה מתקשורת
                  שיווקית. לבקשות ניתן לפנות אלינו:
                </p>
                <p className="font-semibold text-foreground">
                  linq.systems.team@gmail.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  שירות לקטינים
                </h2>
                <p className="text-foreground/80">
                  השירות אינו מיועד למשתמשים מתחת לגיל 18 ואיננו אוספים מידע
                  ביודעין מקטינים.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  עדכונים במדיניות
                </h2>
                <p className="text-foreground/80">
                  אנו רשאים לעדכן את המדיניות מעת לעת, והתאריך בראש הדף מייצג את
                  העדכון האחרון.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  יצירת קשר
                </h2>
                <div className="text-foreground/80">
                  <p className="mb-2">Linq Systems</p>
                  <p>
                    דוא"ל:{" "}
                    <span className="font-semibold text-foreground">
                      linq.systems.team@gmail.com
                    </span>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Linq Systems. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
}
