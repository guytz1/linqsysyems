import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import linqIcon from "@/assets/linq-icon.jpg";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "דף הבית", id: "hero" },
    { label: "האתגר", id: "problem" },
    { label: "הפתרון שלנו", id: "solution" },
    { label: "היתרונות", id: "features" },
    { label: "החוויה", id: "testimonials" },
    { label: "שאלות נפוצות", id: "faq" },
    { label: "צור קשר", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={linqIcon}
              alt="Linq Systems"
              className="h-10 md:h-12 object-contain rounded-lg"
            />
            <span className="font-bold text-lg md:text-xl text-foreground hidden sm:block">
              Linq Systems
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="shadow-elegant hover:shadow-xl transition-all"
            >
              קבעו פגישה חינם
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors relative w-10 h-10 flex items-center justify-center"
            aria-label="תפריט"
          >
            <div className="w-6 h-5 relative flex flex-col justify-center">
              <span
                className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0"
                    : "translate-y-[-8px]"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-[8px]"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border bg-background/80 backdrop-blur-lg ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 py-4"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col gap-2 px-4">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="justify-start text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-2 shadow-elegant"
            >
              קבעו פגישה חינם
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
