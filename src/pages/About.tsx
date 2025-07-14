import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award, ArrowRight, Heart, Zap, Globe } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible with drone technology and creative storytelling."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Every show is crafted with love, dedication, and an unwavering commitment to excellence."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Military-grade accuracy in every movement, ensuring flawless performances every time."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to bring their unique vision to life in the night sky."
  }
];

const achievements = [
  {
    icon: Award,
    title: "Industry Pioneer",
    description: "First company in India to achieve 500+ drone synchronized shows"
  },
  {
    icon: Globe,
    title: "National Recognition",
    description: "Featured in major government events including G20 and Republic Day celebrations"
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description: "Proprietary software for real-time drone choreography and safety monitoring"
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    description: "99% client satisfaction rate with over 100+ successful events"
  }
];

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    description: "Aerospace engineer with 15+ years in drone technology"
  },
  {
    name: "Priya Sharma",
    role: "Creative Director",
    description: "Visual artist specializing in large-scale light installations"
  },
  {
    name: "Dr. Amit Patel",
    role: "Technical Lead",
    description: "PhD in Robotics with expertise in swarm intelligence"
  }
];

export default function About() {
  useEffect(() => {
    document.title = "About FLYBIT Dynamics - Premier Drone Light Show Company India | Our Story";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Learn about FLYBIT Dynamics, India\'s leading drone light show company. Our mission is to create breathtaking aerial displays for weddings, corporate events, and celebrations across India.');
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">FLYBIT Dynamics</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              We believe in the power of light, movement, and technology to create magic. From a spark of inspiration to sky-filling animations, our drone light shows are crafted with precision and passion.
            </p>
            <div className="text-2xl font-space-grotesk font-semibold text-primary mb-8">
              "Where Wonder Begins"
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our <span className="text-primary">Journey</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  FLYBIT Dynamics was born from a simple yet powerful vision: to transform the way we celebrate life's most precious moments. Founded in 2020 by a team of aerospace engineers and creative visionaries, we set out to revolutionize the entertainment industry through cutting-edge drone technology.
                </p>
                <p>
                  What started as a small team of passionate innovators has grown into India's premier drone light show company. We've had the privilege of lighting up the skies for weddings, corporate events, government celebrations, and cultural festivals across the nation.
                </p>
                <p>
                  Our journey is marked by countless magical moments - from intimate wedding proposals written in the stars to grand corporate launches that redefined brand storytelling. Each show has taught us something new about the power of technology to touch hearts and create lasting memories.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 card-gradient glow-blue">
                <h3 className="text-2xl font-bold mb-6 text-center">We Are More Than Technology</h3>
                <p className="text-muted-foreground text-center text-lg italic">
                  "We are storytellers of the sky, dream weavers, and memory makers. Every drone that takes flight carries with it our commitment to making your moment truly unforgettable."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision, every show, and every moment we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 card-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">FLYBIT Dynamics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When you choose us, you're choosing excellence, innovation, and a team that cares as much about your event as you do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-8 card-gradient hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The visionaries and innovators behind every spectacular show.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 card-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            To revolutionize event entertainment through innovative drone technology, creating emotionally impactful performances that bring people together, celebrate human achievements, and inspire wonder in audiences across India and beyond.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Join Our Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}