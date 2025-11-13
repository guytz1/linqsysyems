import { Phone, Mail, CheckCircle2 } from "lucide-react";

export const Contact = () => {
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

            <div className="bg-accent/50 p-8 rounded-2xl border border-primary/20 flex items-center justify-center">
              <iframe 
                src="https://forms.monday.com/forms/embed/b9d612b00610ca870ffb574f227aa594?r=euc1" 
                width="100%" 
                height="500" 
                style={{ border: 0, minHeight: '500px' }}
                title="טופס יצירת קשר"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};