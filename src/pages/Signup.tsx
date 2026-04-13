import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Signup = () => (
  <div className="min-h-screen flex">
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
          <h1 className="font-display text-3xl font-bold text-foreground">Create your account</h1>
          <p className="text-muted-foreground mt-2">Start your training journey today.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label>I am a</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student / Learner</SelectItem>
                <SelectItem value="trainer">Coach / Trainer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" size="lg">Create Account</Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary font-medium hover:underline">Log in</Link>
        </p>
      </motion.div>
    </div>

    <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
      <div className="max-w-md text-center text-primary-foreground space-y-6">
        <h2 className="font-display text-4xl font-bold">Join 10,000+ athletes & coaches</h2>
        <p className="text-primary-foreground/70 text-lg">
          Create courses, track progress, and grow your sports training business.
        </p>
      </div>
    </div>
  </div>
);

export default Signup;
