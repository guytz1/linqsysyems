// ולידציה לאימייל
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// ולידציה לטלפון ישראלי
const validatePhone = (phone: string) => {
  return /^0?5\d{8}$/.test(phone.replace(/\D/g, "")); 
};

// ולידציה לשם מלא (לפחות 2 מילים)
const validateName = (name: string) => {
  return name.trim().split(" ").length >= 2;
};

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // ולידציות לפני שליחה
  if (!validateName(formData.name)) {
    toast({
      title: "נא להזין שם מלא",
      description: "יש להזין לפחות שם פרטי ומשפחה",
      variant: "destructive",
    });
    return;
  }

  if (!validateEmail(formData.email)) {
    toast({
      title: "אימייל לא תקין",
      description: "בדוק שהאימייל שהוזן תקין",
      variant: "destructive",
    });
    return;
  }

  if (!validatePhone(formData.phone)) {
    toast({
      title: "מספר טלפון לא תקין",
      description: "יש להזין מספר טלפון ישראלי תקין",
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const makeWebhookUrl = "https://hook.eu2.make.com/jw07ir5o4dp7238s5pex16a8cbmovw8n";

    await fetch(makeWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    toast({
      title: "תודה על פנייתך!",
      description: "נחזור אליך בהקדם כדי לתאם שיחת אפיון חינמית",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    toast({
      title: "שגיאה",
      description: "אירעה שגיאה בשליחת הטופס. אנא נסו שוב.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


    try {
      const makeWebhookUrl = "https://hook.eu2.make.com/jw07ir5o4dp7238s5pex16a8cbmovw8n";

      await fetch(makeWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast({
        title: "תודה על פנייתך!",
        description: "נחזור אליך בהקדם כדי לתאם שיחת אפיון חינמית",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה בשליחת הטופס. אנא נסו שוב.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 scroll-fade-in ${titleAnimation.isVisible ? "visible" : ""}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              בואו נתחיל - <span className="text-primary">שיחת אפיון חינם לגמרי</span>
            </h2>
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl md:text-3xl font-semibold text-foreground max-w-3xl leading-relaxed">
                30 דקות שיכולות לשנות את הדרך שבה אתם מנהלים את העסק
              </p>
              <p className="text-xl md:text-2xl text-primary font-medium">ללא עלות • ללא התחייבות</p>
            </div>
          </div>

          <div
            ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`grid md:grid-cols-2 gap-12 scroll-fade-in ${contentAnimation.isVisible ? "visible" : ""}`}
          >
            <div className="space-y-8">
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-6">מה קורה בשיחה?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">מכירים את העסק שלכם והאתגרים שאתם מתמודדים איתם</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">מזהים את המערכות והכלים הקיימים שלכם</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">מציעים פתרונות ראשוניים מותאמים אישית</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">עונים על כל השאלות שלכם</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-lg">054-3521115</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-lg">linq.systems.team@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/50 p-8 rounded-2xl border border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* שם */}
                <Input
                  placeholder="שם מלא *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-right"
                  disabled={isSubmitting}
                />

                {/* אימייל */}
                <Input
                  type="email"
                  placeholder="אימייל *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-right"
                  disabled={isSubmitting}
                />

                {/* טלפון — כוכבית בצד הנכון */}
                <Input
                  type="tel"
                  placeholder={'טלפון \u200E*'}
                  dir="rtl"
                  className="text-right"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={isSubmitting}
                />

                <Button type="submit" size="lg" className="w-full text-lg py-6" disabled={isSubmitting}>
                  {isSubmitting ? "שולח..." : "שלחו ונחזור אליכם בהקדם"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  בשליחת הטופס אתם מאשרים שקראתם את{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    מדיניות הפרטיות
                  </a>{" "}
                  שלנו
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
