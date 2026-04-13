import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-accent" />
            <span className="font-display font-bold text-xl">SportFlow</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            The modern platform for sports education and physical training.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/courses" className="hover:text-primary-foreground transition-colors">Browse Courses</Link></li>
            <li><Link to="/pricing" className="hover:text-primary-foreground transition-colors">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">For Trainers</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/signup" className="hover:text-primary-foreground transition-colors">Become a Trainer</Link></li>
            <li><Link to="/dashboard" className="hover:text-primary-foreground transition-colors">Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} SportFlow. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
