import { Card } from '@/components/ui/card';
import { Code, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Expert in MERN stack with modern React patterns, Node.js APIs, and MongoDB database design."
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Specialized in OpenAI API integrations, building intelligent applications with cutting-edge AI capabilities."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Freelancer experienced in delivering high-quality solutions that exceed client expectations."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science undergraduate with a strong foundation in full-stack development. 
            I specialize in creating modern, responsive web applications using the MERN stack and integrating 
            cutting-edge AI technologies to build intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-glass border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-secondary group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                  <highlight.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-secondary border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              My Journey
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently pursuing my Computer Science degree while actively working on real-world projects. 
              I've developed a deep expertise in modern web technologies, from React and Node.js to advanced 
              AI integrations with OpenAI's APIs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience as a freelancer has taught me the importance of clean code, user-centered design, 
              and delivering solutions that not only work flawlessly but also provide exceptional user experiences.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};