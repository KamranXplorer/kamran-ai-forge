import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Cpu, Globe, GitBranch, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: Code,
      level: 90,
      color: "primary"
    },
    {
      name: "Machine Learning",
      icon: Cpu,
      level: 85,
      color: "secondary"
    },
    {
      name: "Streamlit",
      icon: Globe,
      level: 80,
      color: "accent"
    },
    {
      name: "FastAPI",
      icon: Database,
      level: 75,
      color: "primary"
    },
    {
      name: "Git",
      icon: GitBranch,
      level: 85,
      color: "secondary"
    },
    {
      name: "Problem Solving",
      icon: Lightbulb,
      level: 95,
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to build intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const colorClass = skill.color === 'primary' ? 'text-primary' : 
                              skill.color === 'secondary' ? 'text-secondary' : 'text-accent';
            const bgClass = skill.color === 'primary' ? 'bg-primary/20' : 
                           skill.color === 'secondary' ? 'bg-secondary/20' : 'bg-accent/20';
            const progressClass = skill.color === 'primary' ? 'bg-gradient-primary' : 
                                  skill.color === 'secondary' ? 'bg-secondary' : 'bg-accent';

            return (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${bgClass} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-6 w-6 ${colorClass}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${progressClass} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;