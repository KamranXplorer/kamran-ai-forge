import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, BarChart3, Cog, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-powered Web Solutions",
      description: "Custom web applications integrated with machine learning models for intelligent user experiences and automated decision-making.",
      features: ["ML Model Integration", "Real-time Predictions", "Intelligent Automation", "Custom AI Workflows"],
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Data Analysis Dashboards",
      description: "Interactive dashboards and analytics platforms that transform raw data into actionable insights for business decisions.",
      features: ["Interactive Visualizations", "Real-time Analytics", "Custom Reports", "Data Pipeline Integration"],
      color: "secondary"
    },
    {
      icon: Cog,
      title: "Custom ML Model Deployment",
      description: "End-to-end machine learning solutions from model development to production deployment with scalable infrastructure.",
      features: ["Model Development", "API Deployment", "Performance Monitoring", "Scalable Infrastructure"],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI and development solutions tailored to solve your specific challenges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const gradientClass = service.color === 'primary' ? 'bg-gradient-primary' : 
                                 service.color === 'secondary' ? 'bg-secondary' : 'bg-accent';
            const textClass = service.color === 'primary' ? 'text-primary' : 
                             service.color === 'secondary' ? 'text-secondary' : 'text-accent';

            return (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
                <CardContent className="p-8 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg ${gradientClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${gradientClass}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className={`group/btn ${textClass} hover:bg-muted`}>
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how AI can transform your business and create intelligent solutions together.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;