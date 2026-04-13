import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Menu, Play, FileText, Download } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const lessonData = {
  id: "l4",
  title: "Warm-up Routines",
  type: "video" as const,
  videoUrl: "",
  content: `
## Why Warm-ups Matter

A proper warm-up routine is crucial for athletic performance and injury prevention. This lesson covers the essential warm-up protocols used by elite athletes.

### Key Principles

1. **Progressive intensity** — Start slow and gradually increase effort
2. **Sport-specific movements** — Mimic the movements of your sport
3. **Dynamic stretching** — Use movement-based stretches, not static holds
4. **Mental preparation** — Use warm-ups to focus and visualize

### Recommended Duration

Aim for 10–15 minutes of warm-up before any training session or competition. In cold weather, extend this to 15–20 minutes.
  `,
  completed: false,
};

const sidebarLessons = [
  { id: "l1", title: "Introduction to Athletic Performance", completed: true, type: "video" },
  { id: "l2", title: "Setting Your Goals", completed: true, type: "video" },
  { id: "l3", title: "Assessment Guide", completed: false, type: "pdf" },
  { id: "l4", title: "Warm-up Routines", completed: false, type: "video" },
  { id: "l5", title: "Core Stability Basics", completed: false, type: "video" },
  { id: "l6", title: "Flexibility & Mobility", completed: false, type: "video" },
];

const LessonPage = () => {
  const { courseId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(lessonData.completed);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-40 w-80 bg-card border-r transform transition-transform duration-300 lg:transform-none",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-4 border-b flex items-center justify-between">
          <Link to={`/courses/${courseId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Course
          </Link>
          <button className="lg:hidden p-1" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>
        <ScrollArea className="h-[calc(100vh-57px)]">
          <div className="p-3 space-y-1">
            {sidebarLessons.map((l) => (
              <Link
                key={l.id}
                to={`/courses/${courseId}/lessons/${l.id}`}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg text-sm transition-colors",
                  l.id === lessonData.id ? "bg-secondary/10 text-secondary font-medium" : "text-card-foreground hover:bg-muted"
                )}
              >
                {l.completed ? (
                  <CheckCircle className="h-4 w-4 text-success shrink-0" />
                ) : l.type === "video" ? (
                  <Play className="h-4 w-4 text-muted-foreground shrink-0" />
                ) : (
                  <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
                <span className="line-clamp-1">{l.title}</span>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main content */}
      <main className="flex-1 min-w-0">
        <header className="h-14 border-b flex items-center px-4 gap-3">
          <button className="lg:hidden p-2" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="font-display font-semibold text-foreground truncate">{lessonData.title}</h1>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
          {/* Video Player Placeholder */}
          <div className="aspect-video bg-primary rounded-xl flex items-center justify-center shadow-elevated">
            <div className="text-center text-primary-foreground space-y-3">
              <div className="h-16 w-16 rounded-full gradient-accent flex items-center justify-center mx-auto">
                <Play className="h-8 w-8 text-accent-foreground ml-1" />
              </div>
              <p className="text-sm text-primary-foreground/60">Video player — connect storage to stream</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none">
            <div className="whitespace-pre-line text-foreground leading-relaxed text-[15px]">
              {lessonData.content}
            </div>
          </div>

          {/* Resources */}
          <div className="border rounded-xl p-5 bg-card shadow-card space-y-3">
            <h3 className="font-display font-semibold text-card-foreground">Resources</h3>
            <button className="flex items-center gap-3 p-3 w-full rounded-lg border hover:bg-muted transition-colors text-sm text-card-foreground">
              <Download className="h-4 w-4 text-muted-foreground" />
              <span>Warm-up Routine Template.pdf</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button
              variant={isCompleted ? "outline" : "default"}
              size="lg"
              onClick={() => setIsCompleted(!isCompleted)}
              className={isCompleted ? "text-success border-success" : ""}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              {isCompleted ? "Completed" : "Mark Complete"}
            </Button>
            <Button variant="default" size="lg">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonPage;
