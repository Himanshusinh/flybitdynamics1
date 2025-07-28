'use client';


import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Building2, Flag, Rocket, Church, Trophy, ArrowRight, Zap, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import serviceSocial1 from "@/assets/services/social-sevices-01.png";
import serviceSocial2 from "@/assets/services/social-sevices-02.png";
import serviceSocial3 from "@/assets/services/corporate-events-01.png";
import serviceSocial4 from "@/assets/services/corporate-events-02.png";
import serviceSocial5 from "@/assets/services/govt-and-national-events.png";
import serviceSocial6 from "@/assets/services/govt-and-national-events-02.png";
import serviceSocial7 from "@/assets/services/products-launches-01.png";
import serviceSocial8 from "@/assets/services/products-launches-02.png";
import serviceSocial9 from "@/assets/services/spiritual-gathering-01.png";
import serviceSocial10 from "@/assets/services/spiritual-gathering-02.png";
import serviceSocial11 from "@/assets/services/sports-and-entertainment-01.png";
import serviceSocial12 from "@/assets/services/sports-and-entertainment-02.png";
import servicesBanner from "@/assets/services-banner.jpg";

const services = [
  {
    id: "social",
    icon: Heart,
    title: "Social Events",
    subtitle: "Because love deserves to be written in the stars.",
    description: "Transform your most precious moments into magical experiences that will be remembered for generations.",
    features: [
      "Custom initials and names in the sky",
      "Love story animations",
      "Wedding proposal shows",
      "Anniversary celebrations",
      "Birthday spectaculars",
      "Family reunion displays"
    ],
    pricing: "Starting from ₹1,50,000",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    image: [serviceSocial1, serviceSocial2]
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Events",
    subtitle: "Your brand deserves a grand canvas.",
    description: "Elevate your corporate events with stunning aerial displays that showcase your brand values and create lasting impressions.",
    features: [
      "Logo animations in 3D",
      "Brand value storytelling",
      "Product launch reveals",
      "Company milestone celebrations",
      "Conference openers",
      "Award ceremony displays"
    ],
    pricing: "Starting from ₹3,00,000",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    image: [serviceSocial3, serviceSocial4]
  },
  {
    id: "government",
    icon: Flag,
    title: "Government & National Events",
    subtitle: "A new age of patriotic storytelling.",
    description: "Honor national pride with spectacular displays that celebrate our heritage, values, and achievements on the world stage.",
    features: [
      "Republic Day celebrations",
      "Independence Day shows",
      "G20 and international events",
      "Cultural festival displays",
      "State ceremonial events",
      "Tourism promotion shows"
    ],
    pricing: "Custom pricing available",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    image: [serviceSocial5, serviceSocial6]
  },
  {
    id: "product",
    icon: Rocket,
    title: "Product Launches",
    subtitle: "From sky to spotlight – launch like never before.",
    description: "Create buzz and excitement for your product launches with countdown displays, 3D reveals, and memorable brand messages.",
    features: [
      "Countdown sequences",
      "3D product reveals",
      "Brand message displays",
      "Tech product showcases",
      "Automobile launches",
      "Fashion show openers"
    ],
    pricing: "Starting from ₹2,50,000",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    image: [serviceSocial7, serviceSocial8]
  },
  {
    id: "spiritual",
    icon: Church,
    title: "Spiritual Gatherings",
    subtitle: "Merge devotion with wonder.",
    description: "Create divine experiences with sacred symbols, deities, and spiritual geometry that inspire and uplift souls.",
    features: [
      "Om and spiritual symbols",
      "Deity representations",
      "Sacred geometry displays",
      "Festival celebrations",
      "Religious ceremonies",
      "Meditation atmospheres"
    ],
    pricing: "Starting from ₹2,00,000",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    image: [serviceSocial9, serviceSocial10]
  },
  {
    id: "sports",
    icon: Trophy,
    title: "Sports & Entertainment",
    subtitle: "Energize your arena from the sky.",
    description: "Electrify your audience with dynamic displays featuring team mascots, stadium activations, and high-energy pre-show entertainment.",
    features: [
      "Team mascot animations",
      "Stadium activations",
      "Pre-game entertainment",
      "Victory celebrations",
      "Concert openers",
      "Festival activations"
    ],
    pricing: "Starting from ₹4,00,000",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: [serviceSocial11, serviceSocial12]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We understand your vision, requirements, and event details to create a customized show concept."
  },
  {
    step: "02", 
    title: "Design & Planning",
    description: "Our creative team designs the choreography, selects music, and plans the technical execution."
  },
  {
    step: "03",
    title: "Simulation",
    description: "We create detailed 3D simulations for your approval before the actual performance."
  },
  {
    step: "04",
    title: "Execution",
    description: "Our expert team manages setup, safety protocols, and delivers a flawless performance."
  }
];

export default function Services() {
  const [imageIndexes, setImageIndexes] = useState(
    Array(services.length).fill(0)
  );

  // 🔁 Switch image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes(prev =>
        prev.map(index => (index === 0 ? 1 : 0))
      );
    }, 5000); // every 5s
    return () => clearInterval(interval);
  }, []);

  // 🟢 Set SEO metadata on mount
  useEffect(() => {
    document.title = "Drone Light Show Services India | Wedding & Corporate Events - FLYBIT Dynamics";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Professional drone light show services in India. Wedding shows, corporate events, product launches, spiritual gatherings. Custom aerial displays by FLYBIT Dynamics.');
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${servicesBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#f5a30a]">
            One Technology. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Infinite Possibilities.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            From intimate celebrations to grand spectacles, we transform your vision into breathtaking aerial experiences that leave lasting impressions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {services.map((service, index) => (
  <Card key={service.id} className="p-8 card-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
    <div className="flex items-start space-x-4 mb-6">
      <div className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <service.icon className={`w-8 h-8 ${service.color}`} />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground italic mb-3">
          "{service.subtitle}"
        </p>
      </div>
    </div>

    {/* 🔄 Image that changes every 5s */}
    <div className="w-full h-48 rounded-lg overflow-hidden mb-6 group">
      <img 
        src={service.image[imageIndexes[index]]} 
        alt={`${service.title} drone light show`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <p className="text-muted-foreground mb-6">{service.description}</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
      {service.features.map((feature, idx) => (
        <div key={idx} className="flex items-center text-sm">
          <Zap className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </div>
      ))}
    </div>

    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
      Get Quote for {service.title}
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  </Card>
))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to execution, we ensure every detail is perfect for your unforgettable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 card-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-accent text-[#f5a30a]">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 card-gradient hover:shadow-xl transition-all duration-300 text-center group">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Our experienced team of pilots, engineers, and creative directors ensure every show is executed flawlessly.
              </p>
            </Card>

            <Card className="p-8 card-gradient hover:shadow-xl transition-all duration-300 text-center group">
              <Star className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">100% Customizable</h3>
              <p className="text-muted-foreground">
                Every show is tailored to your specific needs, preferences, and creative vision. No two shows are ever the same.
              </p>
            </Card>

            <Card className="p-8 card-gradient hover:shadow-xl transition-all duration-300 text-center group">
              <Zap className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Latest Technology</h3>
              <p className="text-muted-foreground">
                We use cutting-edge drone technology with GPS precision and advanced safety systems for perfect performances.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your vision and create a show that will leave your audience speechless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-[#3D473B] border-white bg-white hover:bg-primary hover:text-white text-lg px-8 py-4">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
