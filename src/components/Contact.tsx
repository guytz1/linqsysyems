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
import { Link } from "react-router-dom";

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

  // ------------------ ON BLUR VALIDATION ------------------

  const handleNameBlur = (value: string) => {
    if (!validateName(value)) {
      setErrors((prev) => ({
        ...prev,
        name: "יש להזין שם מלא (לפחות 2 מילים)",
      }));
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleEmailBlur = (value: string) => {
    if (!validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "אימייל לא תקין",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneBlur = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
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

    if (
      !validateName(formData.name) ||
      !validateEmail(formData.email) ||
      !validatePhone(formData.phone)
    ) {
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
    <section id="contact" className="section-spacing bg-background relative">
      <div className="absolute inset-x-0 top-0 section-divider" />
      
      <div className="container mx-auto mobile-container">
        <div className="max-w-5xl mx-auto">
          {/* כותרת */}
          <div
            ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 md:mb-16 scroll-fade-in ${
              titleAnimation.isVisible ? "visible" : ""
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 leading-tight px-2">
              בואו נתחיל -{" "}
              <span className="text-primary">שיחת אפיון חינם לגמרי</span>
            </h2>
            <div className="flex flex-col items-center gap-4 md:gap-5">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground max-w-3xl leading-relaxed px-4">
                30 דקות שיכולות לשנות את הדרך שבה אתם מנהלים את העסק
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-primary font-medium px-4">
                ללא עלות • ללא התחייבות
              </p>
            </div>
          </div>

          {/* התוכן */}
          <div
            ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`grid md:grid-cols-2 gap-6 md:gap-12 scroll-fade-in ${
              contentAnimation.isVisible ? "visible" : ""
            }`}
          >
            {/* צד שמאל */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-primary/5 p-6 md:p-8 rounded-2xl border border-primary/20 shadow-soft">
                <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 leading-snug">מה קורה בשיחה?</h3>
                <div className="space-y-4 md:space-y-5">
                  <div className="flex gap-3 md:gap-4">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      מכירים את העסק שלכם והאתגרים שאתם מתמודדים איתם
                    </p>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      מזהים את המערכות והכלים הקיימים שלכם
                    </p>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      מציעים פתרונות ראשוניים מותאמים אישית
                    </p>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      עונים על כל השאלות שלכם
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-5 bg-accent/30 p-6 md:p-8 rounded-2xl border border-primary/10 shadow-soft">
                <div className="flex items-center gap-3 md:gap-4">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg">054-3521115</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base break-all">linq.systems.team@gmail.com</span>
                </div>
              </div>
            </div>

            {/* צד ימין - טופס */}
            <div className="bg-accent/50 p-6 md:p-8 rounded-2xl border border-primary/20 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                
                {/* שם מלא */}
                <div>
                  <Input
                    type="text"
                    placeholder="שם מלא *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    onBlur={(e) => handleNameBlur(e.target.value)}
                    className={`text-right text-base ${
                      errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs md:text-sm mt-2 text-right leading-relaxed">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* אימייל */}
                <div>
                  <Input
                    type="text"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="אימייל *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    onBlur={(e) => handleEmailBlur(e.target.value)}
                    className={`text-right text-base ${
                      errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs md:text-sm mt-2 text-right leading-relaxed">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* טלפון */}
                <div>
                  <Input
                    type="text"
                    inputMode="tel"
                    placeholder="טלפון *"
                    value={formData.phone}
                    dir="rtl"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value.replace(/\D/g, ""),
                      }))
                    }
                    onBlur={(e) => handlePhoneBlur(e.target.value)}
                    className={`text-right text-base ${
                      errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs md:text-sm mt-2 text-right leading-relaxed">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* כפתור */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base md:text-lg py-6 md:py-7 shadow-elegant hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "שולח..." : "שלחו ונחזור אליכם בהקדם"}
                </Button>

                <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed px-2">
                  בשליחת הטופס אתם מאשרים שקראתם את{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-primary hover:underline"
                  >
                    מדיניות הפרטיות
                  </Link>
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 section-divider" />
    </section>
  );
};
