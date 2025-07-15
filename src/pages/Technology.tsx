import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import technologyBanner from "@/assets/technology-banner.jpg";
import { 
  Cpu, 
  Satellite, 
  Shield, 
  Cloud, 
  Radio, 
  Battery, 
  Eye, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Activity,
  Map
} from "lucide-react";

const techSpecs = [
  {
    icon: Cpu,
    title: "Advanced Flight Controller",
    description: "Custom-built flight controllers with real-time processing capabilities",
    specs: ["32-bit ARM processor", "IMU stabilization", "Sub-millisecond response"]
  },
  {
    icon: Satellite,
    title: "GPS & RTK Precision",
    description: "Centimeter-level accuracy for perfect aerial choreography",
    specs: ["RTK GPS correction", "±2cm positioning accuracy", "Real-time tracking"]
  },
  {
    icon: Radio,
    title: "Mesh Communication",
    description: "Robust communication network ensuring seamless coordination",
    specs: ["2.4GHz + 5.8GHz dual-band", "Redundant communication paths", "1km+ range"]
  },
  {
    icon: Battery,
    title: "High-Capacity Batteries",
    description: "Extended flight time with intelligent power management",
    specs: ["25+ minutes flight time", "Smart battery monitoring", "Hot-swappable design"]
  }
];

const softwareFeatures = [
  {
    icon: Eye,
    title: "3D Animation Suite",
    description: "Professional-grade software for creating stunning aerial choreography",
    features: [
      "Real-time 3D visualization",
      "Physics-based simulation",
      "Timeline-based animation",
      "Custom shape creation"
    ]
  },
  {
    icon: Shield,
    title: "Safety Management System",
    description: "Comprehensive safety protocols and monitoring systems",
    features: [
      "Collision avoidance algorithms",
      "Emergency landing protocols", 
      "Real-time health monitoring",
      "Geofencing protection"
    ]
  },
  {
    icon: Activity,
    title: "Performance Analytics",
    description: "Advanced analytics and monitoring during shows",
    features: [
      "Live telemetry dashboard",
      "Performance metrics",
      "Error detection & reporting",
      "Post-show analysis"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless cloud connectivity for remote monitoring and updates",
    features: [
      "Remote monitoring capability",
      "OTA firmware updates",
      "Cloud-based choreography sync",
      "Backup and recovery"
    ]
  }
];

const safetyFeatures = [
  "Redundant flight systems",
  "Automatic return-to-home",
  "Real-time weather monitoring",
  "Emergency landing zones",
  "Pilot override controls",
  "360° obstacle detection"
];

const certifications = [
  { name: "DGCA Approved", status: "Certified" },
  { name: "CE Marked", status: "Compliant" },
  { name: "FCC Certified", status: "Approved" },
  { name: "ISO 9001", status: "Quality Assured" }
];

export default function Technology() {
  useEffect(() => {
    document.title = "Drone Technology & Hardware | Advanced Aerial Systems - FLYBIT Dynamics";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Cutting-edge drone technology and hardware specifications. Military-grade components, GPS precision, and proprietary software for spectacular drone light shows in India.');
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${technologyBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Brains Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">The Beauty</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            At the heart of every FLYBIT show lies powerful software, high-precision drones, and synchronized choreography that pushes the boundaries of what's possible.
          </p>
        </div>
      </section>

      {/* Hardware Specifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Hardware</span> Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Military-grade components engineered for precision, reliability, and spectacular performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techSpecs.map((spec, index) => (
              <Card key={index} className="p-8 card-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <spec.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{spec.description}</p>
                    <div className="space-y-2">
                      {spec.specs.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mr-2" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proprietary <span className="text-primary">Software</span> Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-house developed software for animation, simulation, and real-time control of hundreds of drones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareFeatures.map((feature, index) => (
              <Card key={index} className="p-8 card-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Regulations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Safety <span className="text-primary">First</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive safety systems ensure every show is executed with the highest standards of security and reliability. Multiple redundancies and fail-safes protect both audience and equipment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {safetyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="btn-glow">
                Learn More About Safety
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <Card className="p-8 card-gradient">
              <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Compliance</h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                    <span className="font-medium">{cert.name}</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {cert.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-primary">Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 card-gradient hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Max Drones per Show</div>
            </Card>
            
            <Card className="p-6 card-gradient hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-accent mb-2">±2cm</div>
              <div className="text-sm text-muted-foreground">Positioning Accuracy</div>
            </Card>
            
            <Card className="p-6 card-gradient hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">25min</div>
              <div className="text-sm text-muted-foreground">Flight Time per Drone</div>
            </Card>
            
            <Card className="p-6 card-gradient hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">1km+</div>
              <div className="text-sm text-muted-foreground">Communication Range</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pushing the Boundaries of Innovation
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our R&D team continuously develops new technologies to create even more spectacular and safe drone light shows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Technical Partnership <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-[#3D473B] border-white bg-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              <Map className="mr-2 w-5 h-5" />
              View Our Capabilities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}