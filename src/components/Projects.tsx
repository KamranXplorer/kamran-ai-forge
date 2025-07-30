import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, DollarSign, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Currency Converter App",
      description: "Real-time currency conversion tool using Python and Streamlit with live exchange rates and interactive user interface.",
      image: "/placeholder.svg",
      technologies: ["Python", "Streamlit", "API Integration", "Real-time Data"],
      githubUrl: "#",
      liveUrl: "#",
      icon: DollarSign,
      color: "primary"
    },
    {
      title: "Streamlit Text Editor",
      description: "Lightweight web-based text editor built with Streamlit and Python, featuring syntax highlighting and file management.",
      image: "/placeholder.svg",
      technologies: ["Python", "Streamlit", "File Handling", "Web Development"],
      githubUrl: "#",
      liveUrl: "#",
      icon: FileText,
      color: "secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in AI development, web applications, and data solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const gradientClass = project.color === 'primary' ? 'bg-gradient-primary' : 'bg-secondary';

            return (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-lg ${gradientClass} flex items-center justify-center`}>
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className={`flex-1 ${gradientClass} hover:opacity-90 text-primary-foreground`}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;