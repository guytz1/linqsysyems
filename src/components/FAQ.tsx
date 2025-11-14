import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "כמה זמן לוקח להטמיע את המערכת?",
    answer: "תלוי במורכבות העסק והמערכות הקיימות, אבל בדרך כלל התהליך לוקח בין 2-6 שבועות מתחילת העבודה ועד השקה מלאה. אנחנו עובדים בשלבים כדי שתתחילו לראות תוצאות מהר."
  },
  {
    question: "האם אצטרך להחליף את הכלים הקיימים שלי?",
    answer: "בדרך כלל לא! אנחנו מומחים בלחבר בין הכלים שכבר עובדים לכם. אם יש כלי שלא משרת אתכם טוב, נציע לכם חלופה טובה יותר - אבל ההחלטה שלכם."
  },
  {
    question: "כמה זה עולה?",
    answer: "כל עסק הוא ייחודי ולכן גם המחיר משתנה. בשיחת האפיון החינמית נבין את הצרכים שלכם ונציע לכם תמחור הוגן ושקוף. בלי הפתעות."
  },
  {
    question: "מה קורה אם אני צריך שינויים בעתיד?",
    answer: "המערכת בנויה להיות גמישה. אנחנו מלווים אתכם גם אחרי ההטמעה ותמיד אפשר לבצע שינויים, תוספות ושדרוגים בהתאם לצרכים המשתנים של העסק."
  },
  {
    question: "האם המידע שלי יהיה מאובטח?",
    answer: "בהחלט. אנחנו עובדים עם הכלים המתקדמים והמאובטחים ביותר בשוק, כולל גיבויים אוטומטיים, הצפנה ועמידה בכל תקני האבטחה והפרטיות."
  },
  {
    question: "האם אני צריך ידע טכני?",
    answer: "בכלל לא. אנחנו דואגים לכל הטכנולוגיה ומדריכים את הצוות שלכם בצורה פשוטה ונגישה. המערכת מתוכננת להיות ידידותית למשתמש ופשוטה לתפעול יומיומי."
  }
];

export const FAQ = () => {
  const titleAnimation = useScrollAnimation();
  const accordionAnimation = useScrollAnimation();
  
  return (
    <section className="section-spacing bg-muted/30 relative">
      <div className="absolute inset-x-0 top-0 section-divider" />
      
      <div className="container mx-auto mobile-container">
        <div className="max-w-3xl mx-auto">
          <div 
            ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 md:mb-16 scroll-fade-in ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2">
              שאלות נפוצות
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
              התשובות לשאלות שמעסיקות את רוב הלקוחות שלנו
            </p>
          </div>

          <div 
            ref={accordionAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`scroll-fade-in ${accordionAnimation.isVisible ? 'visible' : ''}`}
          >
            <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-5 md:px-6 shadow-soft"
              >
                <AccordionTrigger className="text-right text-base md:text-lg font-bold hover:text-primary py-5 md:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground text-right leading-relaxed pt-2 pb-5 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            </Accordion>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 section-divider" />
    </section>
  );
};
