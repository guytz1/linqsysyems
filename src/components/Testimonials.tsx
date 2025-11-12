import { Star } from "lucide-react";

const testimonials = [
  {
    name: "יוסי כהן",
    company: "מנכ\"ל, חברת הייטק בע\"מ",
    content: "Linq Systems שינו לנו את כללי המשחק. מערכת CRM מושלמת שמחוברת לכל הכלים שלנו - חסכנו שעות עבודה כל יום.",
    rating: 5
  },
  {
    name: "רונית לוי",
    company: "מנהלת שיווק, סטארטאפ בצמיחה",
    content: "הצוות המקצועי ביותר שעבדתי איתו. הבינו בדיוק מה אנחנו צריכים ויצרו לנו פתרון מושלם שמתאים למציאות שלנו.",
    rating: 5
  },
  {
    name: "דוד מזרחי",
    company: "בעלים, חברת שירותים",
    content: "לא האמנתי שאפשר לחבר בין כל המערכות שלנו כל כך בקלות. היום אני רואה את כל העסק במקום אחד וזה משנה הכל.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            מה הלקוחות שלנו אומרים?
          </h2>
          <p className="text-xl text-muted-foreground">
            עשרות עסקים כבר חוסכים זמן וכסף עם הפתרונות שלנו
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-accent/50 p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all border border-primary/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
