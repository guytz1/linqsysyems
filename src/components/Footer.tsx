import linqIcon from "@/assets/linq-icon.jpg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={linqIcon} alt="Linq Systems" className="h-10 w-10 rounded-lg" />
                <span className="font-bold text-xl">Linq Systems</span>
              </div>
              <p className="text-background/80">
                מחברים בין מערכות ליצירת עסקים חכמים ויעילים
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">אודות</a></li>
                <li><a href="#" className="hover:text-background transition-colors">שירותים</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">צור קשר</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">יצירת קשר</h4>
              <ul className="space-y-2 text-background/80">
                <li>054-3521115</li>
                <li>info@linq-systems.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2025 Linq Systems. כל הזכויות שמורות.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
