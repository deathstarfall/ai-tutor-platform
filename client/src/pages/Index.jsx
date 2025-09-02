import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Sparkles, Zap, BookOpen, MessageSquare, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-xl float-slow" />
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-lg opacity-30 blur-lg float-medium rotate-45" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-secondary to-accent rounded-full opacity-15 blur-2xl float-reverse" />
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-gradient-to-r from-accent to-secondary rounded-full opacity-25 blur-lg float-fast" />
        
        {/* Neural network lines */}
        <div className="neural-line top-1/4 h-px w-full delay-0" />
        <div className="neural-line top-2/3 h-px w-full delay-1000" />
        <div className="neural-line top-1/2 h-px w-full delay-2000" />

        {/* 3D rotating elements */}
        <div className="absolute top-32 right-1/4 w-16 h-16 transform-3d rotate-3d opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-primary to-accent rounded-lg shadow-lg" />
        </div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 transform-3d rotate-3d opacity-40 delay-500">
          <div className="w-full h-full bg-gradient-to-r from-secondary to-primary rounded-full shadow-lg" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 pt-8 pb-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg pulse-glow" />
              <span className="text-xl font-bold gradient-text">AI Tutor</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <Button variant="ghost" className="hover:bg-primary/10">Sign In</Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium animate-fade-in-up glass">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </Badge>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 animate-fade-in-up delay-100">
              Your Personal{" "}
              <span className="gradient-text">AI Tutor</span>
              <br />
              <span className="gradient-accent-text">Awaits</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Experience personalized learning like never before. Our AI-powered tutor adapts to your pace, 
              understands your needs, and guides you toward mastery in any subject.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-lg">
                Start Learning Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold border-primary/20 hover:bg-primary/10 transition-all hover:scale-105">
                <MessageSquare className="mr-2 w-5 h-5" />
                Try Demo Chat
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in-up delay-400">
              <Card className="p-6 glass border-primary/10 hover:border-primary/20 transition-all">
                <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
                <div className="text-muted-foreground">Students Learning</div>
              </Card>
              <Card className="p-6 glass border-accent/10 hover:border-accent/20 transition-all">
                <div className="text-3xl font-bold gradient-accent-text mb-2">50+</div>
                <div className="text-muted-foreground">Subjects Covered</div>
              </Card>
              <Card className="p-6 glass border-secondary/10 hover:border-secondary/20 transition-all">
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </Card>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
              Why Choose Our AI Tutor?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 glass border-primary/10 hover:border-primary/20 transition-all hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Adaptive Learning</h3>
                <p className="text-muted-foreground">
                  Our AI adapts to your learning style and pace, creating a personalized experience that maximizes retention and understanding.
                </p>
              </Card>

              <Card className="p-8 glass border-accent/10 hover:border-accent/20 transition-all hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-4">Instant Feedback</h3>
                <p className="text-muted-foreground">
                  Get immediate, detailed feedback on your progress with explanations that help you understand concepts deeply.
                </p>
              </Card>

              <Card className="p-8 glass border-secondary/10 hover:border-secondary/20 transition-all hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Goal-Oriented</h3>
                <p className="text-muted-foreground">
                  Set learning goals and track your progress with AI-powered insights that keep you motivated and on track.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-border/50">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 AI Tutor. Empowering minds through intelligent learning.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;