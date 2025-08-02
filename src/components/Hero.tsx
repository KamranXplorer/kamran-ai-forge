import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Mail } from 'lucide-react';
import profileImage from '@/assets/kamran-profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hello, I'm{' '}
                <span className="text-gradient">Kamran Khan</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground">
                AI Developer | Python Enthusiast | Problem Solver
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Building intelligent AI-powered solutions for real-world impact through machine learning and innovative web applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="ghost" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
                <img
                  src={profileImage}
                  alt="Kamran Khan - AI Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-accent rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
