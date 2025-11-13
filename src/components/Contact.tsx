import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              בואו נתחיל - <span className="text-primary">שיחת אפיון חינם לגמרי</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              30 דקות שיכולות לשנות את הדרך שבה אתם מנהלים את העסק. ללא עלות, ללא התחייבות.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
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
                })} required className="text-right" />
                </div>
                <div>
                  <Input type="email" placeholder="אימייל *" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="text-right" />
                </div>
                <div>
                  <Input type="tel" placeholder="טלפון *" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} required className="text-right" />
                </div>
                <div>
                  <Textarea placeholder="ספרו לנו קצת על העסק שלכם והאתגרים שאתם מתמודדים איתם (אופציונלי)" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} rows={4} className="text-right" />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  שלחו ונחזור אליכם בהקדם
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  בשליחת הטופס אתם מאשרים שקראתם את מדיניות הפרטיות שלנו
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};