import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-accent" />
          <span className="font-display font-bold text-xl text-foreground">SportFlow</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/courses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Formation
          </Link>
          <Link to="/community" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Communauté
          </Link>
          <Link to="/certification" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Certification
          </Link>
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Connexion</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Commencer</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b px-4 pb-4 space-y-3">
          <Link to="/courses" className="block text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Formation</Link>
          <Link to="/community" className="block text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Communauté</Link>
          <Link to="/certification" className="block text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Certification</Link>
          <Link to="/dashboard" className="block text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Dashboard</Link>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" asChild className="flex-1">
              <Link to="/login">Connexion</Link>
            </Button>
            <Button asChild className="flex-1">
              <Link to="/signup">Commencer</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
