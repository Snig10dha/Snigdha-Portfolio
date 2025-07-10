import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "snigdha.jallipalli@email.com",
    href: "mailto:snigdha.jallipalli@email.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available for Remote Work",
    href: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "snigdha-jallipalli",
    href: "https://github.com/snigdha-jallipalli"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "snigdha-jallipalli",
    href: "https://linkedin.com/in/snigdha-jallipalli"
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm available for freelance projects and full-time opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="p-8 bg-gradient-glass border-border/50">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Find Me Online</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <social.icon className="w-4 h-4 mr-2" />
                    {social.label}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-secondary border-border/50 flex flex-col justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center animate-glow-pulse">
                <Mail className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Ready to Start Your Project?
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need a full-stack web application, AI integration, or just want to discuss your ideas, 
                I'm here to help bring your vision to life.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  onClick={() => window.open('mailto:snigdha.jallipalli@email.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full border-primary/30 hover:border-primary hover:shadow-glow-secondary transition-all duration-300"
                  onClick={() => window.open('tel:+15551234567', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};