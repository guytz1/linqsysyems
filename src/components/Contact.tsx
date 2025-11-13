import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
export const Contact = () => {
  const {
    toast
  } = useToast();
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
    setIsSubmitting(true);
    try {
      // Send data to Monday.com webhook
      const mondayWebhookUrl = "https://forms.monday.com/forms/b9d612b00610ca870ffb574f227aa594";
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);

      // Submit to Monday.com
      await fetch(mondayWebhookUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors" // Monday.com forms typically require no-cors
      });
      toast({
        title: "תודה על פניתך!",
        description: "נחזור אליך בהקדם האפשרי לתיאום שיחת האפיון החינמית"
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה בשליחת הטופס. אנא נסו שוב.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div ref={titleAnimation.ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 scroll-fade-in ${titleAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              בואו נתחיל - <span className="text-primary">שיחת אפיון חינם לגמרי</span>
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

          <div ref={contentAnimation.ref as React.RefObject<HTMLDivElement>} className={`grid md:grid-cols-2 gap-12 scroll-fade-in ${contentAnimation.isVisible ? 'visible' : ''}`}>
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
                <div>
                  <Input placeholder="שם מלא *" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} required className="text-right" disabled={isSubmitting} />
                </div>
                <div>
                  <Input type="email" placeholder="אימייל *" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="text-right" disabled={isSubmitting} />
                </div>
                <div>
                  <Input type="tel" placeholder="טלפון *" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} required className="text-right" disabled={isSubmitting} />
                </div>
                <div>
                  
                </div>
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
                  </a>
                  {" "}שלנו
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};