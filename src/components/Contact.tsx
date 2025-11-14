// ------------------ VALIDATION FUNCTIONS ------------------

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

const validatePhone = (phone: string) => {
  return /^0?5\d{8}$/.test(phone.replace(/\D/g, ""));
};

const validateName = (name: string) => {
  return name.trim().split(" ").length >= 2;
};

// ----------------------------------------------------------

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();

  // ------------------ REAL-TIME VALIDATION ------------------

  const handleNameChange = (value: string) => {
    setFormData({ ...formData, name: value });

    if (!validateName(value)) {
      setErrors((prev) => ({
        ...prev,
        name: "יש להזין שם מלא (לפחות 2 מילים)",
      }));
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value });

    if (!validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "אימייל לא תקין",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneChange = (value: string) => {
    // מגביל רק לספרות
    const cleaned = value.replace(/\D/g, "");
    setFormData({ ...formData, phone: cleaned });

    if (!validatePhone(cleaned)) {
      setErrors((prev) => ({
        ...prev,
        phone: "מספר טלפון ישראלי לא תקין",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  // ------------------ FORM SUBMIT ------------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // בדיקה סופית
    if (!validateName(formData.name) ||
        !validateEmail(formData.email) ||
        !validatePhone(formData.phone)) 
    {
      toast({
        title: "שגיאה בטופס",
        description: "אנא תקנו את השגיאות בשדות המסומנים",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const makeWebhookUrl =
        "https://hook.eu2.make.com/jw07ir5o4dp7238s5pex16a8cbmovw8n";

      await fetch(makeWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast({
        title: "תודה על פנייתך!",
        description: "נחזור אליך בהקדם לתיאום שיחת אפיון חינמית",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({ name: "", email: "", phone: "" });

    } catch (error) {
      toast({
        title: "שגיאה",
        description: "אירעה תקלה בשליחת הטופס",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ------------------ UI ------------------

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* כותרת */}
          <div
            ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 scroll-fade-in ${
              titleAnimation.isVisible ? "visible" : ""
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              בואו נתחיל -{" "}
              <span className="text-primary">שיחת אפיון חינם לגמרי</span>
            </h2>
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl md:text-3xl font-semibold text-foreground max-w-3xl leading-relaxed">
                30 דקות שיכולות לשנות את הדרך שבה אתם מנהלים את העסק
              </p>
              <p className="text-xl md:text-2xl text-primary font-medium">
                ללא עלות • ללא התחייבות
              </p>
            </div>
          </div>

          {/* התוכן */}
          <div
            ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`grid md:grid-cols-2 gap-12 scroll-fade-in ${
              contentAnimation.isVisible ? "visible" : ""
            }`}
          >
            {/* צד שמאל */}
            <div className="space-y-8">
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-6">מה קורה בשיחה?</h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                    <p className="text-muted-foreground">
                      מכירים את העסק שלכם והאתגרים שאתם מתמודדים איתם
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                    <p className="text-muted-foreground">
                      מזהים את המערכות והכלים הקיימים שלכם
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                    <p className="text-muted-foreground">
                      מציעים פתרונות ראשוניים מותאמים אישית
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                    <p className="text-muted-foreground">
                      עונים על כל השאלות שלכם
                    </p>
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

            {/* צד ימין - טופס */}
            <div className="bg-accent/50 p-8 rounded-2xl border border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
  <Input
  placeholder={'שם מלא *\u200E'}
    value={formData.name}
    onChange={(e) => handleNameChange(e.target.value)}
    className={`text-right ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
    disabled={isSubmitting}
  />
  {errors.name && (
    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
  )}
</div>

  <Input
    type="text"               // ← במקום email
    inputMode="email"
    autoComplete="email"
  placeholder={'אימייל *\u200E'}
    value={formData.email}
    onChange={(e) => handleEmailChange(e.target.value)}
    className={`text-right ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
    disabled={isSubmitting}
  />
  {errors.email && (
    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
  )}
</div>


                <div>
  <Input
    type="text"
    inputMode="tel"
  placeholder={'טלפון *\u200E'}
    value={formData.phone}
    onChange={(e) => handlePhoneChange(e.target.value)}
    className={`text-right ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
    disabled={isSubmitting}
  />
  {errors.phone && (
    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
  )}
</div>


                {/* כפתור */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "שולח..." : "שלחו ונחזור אליכם בהקדם"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  בשליחת הטופס אתם מאשרים שקראתם את{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    מדיניות הפרטיות
                  </a>
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
