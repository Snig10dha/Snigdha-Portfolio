import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Chat Application",
    description: "A modern chat application with OpenAI integration, featuring real-time messaging, conversation history, and intelligent AI responses. Built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
    github: "https://github.com/snigdha-jallipalli",
    demo: "#",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Responsive design with modern UI/UX.",
    technologies: ["MERN Stack", "Stripe API", "JWT", "Tailwind CSS"],
    github: "https://github.com/snigdha-jallipalli",
    demo: "#",
    featured: false
  },
  {
    title: "Task Management Dashboard",
    description: "Collaborative task management tool with drag-and-drop functionality, team collaboration features, and real-time updates using WebSocket connections.",
    technologies: ["React", "TypeScript", "Express.js", "PostgreSQL"],
    github: "https://github.com/snigdha-jallipalli",
    demo: "#",
    featured: false
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`overflow-hidden bg-gradient-glass border-border/50 hover:border-primary/30 transition-all duration-300 group ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Project Info */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div>
                      {project.featured && (
                        <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
                          Featured Project
                        </Badge>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-primary/30 hover:border-primary hover:bg-primary/10"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-gradient-primary hover:shadow-glow-secondary"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Project Preview */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="aspect-video bg-gradient-secondary rounded-lg border border-border/50 flex items-center justify-center group-hover:shadow-glow-secondary transition-all duration-300">
                      <div className="text-center text-muted-foreground">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm">Project Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary hover:shadow-glow-secondary transition-all duration-300"
            onClick={() => window.open('https://github.com/snigdha-jallipalli', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};