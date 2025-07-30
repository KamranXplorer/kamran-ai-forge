import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Brain, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI Developer Intern with experience in machine learning, building intelligent web applications, 
            and solving real-world problems using data-driven approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about leveraging artificial intelligence to create meaningful solutions 
              that make a difference. My journey began with a curiosity about how machines can learn 
              and adapt, leading me to dive deep into machine learning algorithms and their practical applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as an AI Developer Intern at Viswam.AI, I specialize in building 
              intelligent systems that bridge the gap between complex data and user-friendly applications. 
              My experience spans from developing ML models to creating interactive web dashboards using 
              modern Python frameworks.
            </p>

            {/* Education */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">B.Tech in Computer Science</h4>
                    <p className="text-muted-foreground">Shadan College of Engineering and Technology (JNTUH)</p>
                    <p className="text-sm text-muted-foreground">2020 – 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">What I Bring</h3>
            <div className="space-y-4">
              <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <Brain className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">AI & Machine Learning</h4>
                      <p className="text-muted-foreground text-sm">
                        Developing intelligent models and deploying them in real-world applications
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Code className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Web Development</h4>
                      <p className="text-muted-foreground text-sm">
                        Creating responsive, user-friendly applications with modern frameworks
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Problem Solving</h4>
                      <p className="text-muted-foreground text-sm">
                        Analytical thinking to tackle complex challenges with data-driven solutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;