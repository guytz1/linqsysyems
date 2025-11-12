import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import linqLogo from "@/assets/linq-logo.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img 
              src={linqLogo} 
              alt="Linq Systems" 
              className="h-16 md:h-20 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            מחברים בין המערכות שלכם
            <span className="block text-primary mt-2">ליצירת עסק חכם ויעיל</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            אפיון, יישום והטמעה של מערכות CRM ואוטומציות מתקדמות שמחברות את כל הכלים הדיגיטליים שלכם למערכת אחת חכמה
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-elegant hover:shadow-xl transition-all"
              onClick={scrollToContact}
            >
              לקביעת שיחת אפיון חינם לגמרי
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            ללא התחייבות • ללא עלות • 30 דקות שישנו את העסק שלכם
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
