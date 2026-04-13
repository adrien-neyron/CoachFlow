import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => (
  <div className="min-h-screen flex">
    {/* Left: Form */}
    <div className="flex-1 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm space-y-8"
      >
        <div>
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-lg gradient-accent" />
            <span className="font-display font-bold text-xl text-foreground">SportFlow</span>
          </Link>
          <h1 className="font-display text-3xl font-bold text-foreground">Welcome back</h1>
          <p className="text-muted-foreground mt-2">Log in to your account to continue learning.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full" size="lg">Log in</Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-secondary font-medium hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </div>

    {/* Right: Visual */}
    <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
      <div className="max-w-md text-center text-primary-foreground space-y-6">
        <h2 className="font-display text-4xl font-bold">Train smarter, not harder.</h2>
        <p className="text-primary-foreground/70 text-lg">
          Access world-class sports training courses from anywhere.
        </p>
      </div>
    </div>
  </div>
);

export default Login;
