import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Developer Intern",
      company: "Viswam.AI",
      period: "June 2025 – Present",
      description: "Work on ML models and AI integrations for intelligent systems.",
      skills: ["Machine Learning", "AI Integration", "Python", "Data Analysis"],
      color: "primary"
    },
    {
      title: "Python Development Intern",
      company: "CodeClause",
      period: "June 2025 – July 2025",
      description: "Contributed to backend development and script automation using Python.",
      skills: ["Python", "Backend Development", "Automation", "Script Development"],
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey in AI development and software engineering, building innovative solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Timeline and Icon */}
                  <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                    <div className={`p-3 rounded-lg ${exp.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'}`}>
                      <Briefcase className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className={`text-lg font-medium ${exp.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;