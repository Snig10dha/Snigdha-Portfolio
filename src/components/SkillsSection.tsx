import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    category: "Backend", 
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 92 },
    ]
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "OpenAI API", level: 88 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "Git", level: 90 },
    ]
  }
];

const technologies = [
  "React", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS", 
  "Express.js", "Next.js", "OpenAI API", "Python", "Java", 
  "JavaScript", "HTML5", "CSS3", "Git", "REST APIs", "GraphQL"
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-glass border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <Card className="p-8 bg-gradient-secondary border-border/50">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};