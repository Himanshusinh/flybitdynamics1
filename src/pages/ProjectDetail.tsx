import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Users, Clock, Star, Heart, Share2 } from "lucide-react";

// This would typically come from an API or database
const getProjectById = (id: string) => {
  const projects = [
    {
      id: 1,
      title: "Royal Wedding Celebration",
      category: "social-events",
      location: "Mumbai, Maharashtra",
      date: "2024-02-14",
      attendees: "500+",
      duration: "45 minutes",
      rating: 4.9,
      image: "/lovable-uploads/32653dea-0b30-472d-83b7-4682377a49ba.png",
      description: "A spectacular drone light show for a royal wedding with custom storytelling and romantic themes. The show featured personalized animations telling the couple's love story, complete with their initials, wedding date, and romantic symbols floating gracefully across the night sky.",
      tags: ["Wedding", "Luxury", "Custom Animation"],
      gallery: [
        "/lovable-uploads/32653dea-0b30-472d-83b7-4682377a49ba.png",
        "/lovable-uploads/905818b5-70ce-4c63-9c27-8bf3a40fd783.png",
        "/lovable-uploads/ff447dbb-7066-4d66-b0e3-99bd3e8b7f9a.png",
      ],
      video: "https://example.com/video1.mp4",
      highlights: [
        "500 synchronized drones",
        "Custom love story animation",
        "45-minute spectacular show",
        "Traditional Indian wedding themes",
        "Fireworks synchronization"
      ],
      testimonial: {
        text: "FLYBIT Dynamics made our wedding absolutely magical! The drone show was the highlight of our celebration and left all our guests in awe.",
        author: "Priya & Rajesh",
        role: "Bride & Groom"
      }
    },
    // Add more projects as needed
  ];
  
  return projects.find(p => p.id === parseInt(id)) || null;
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Premier Drone Light Show | FLYBIT Dynamics India`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${project.description.substring(0, 150)}... Experience spectacular drone light shows by India's premier drone entertainment company FLYBIT Dynamics.`);
      }

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        const categoryKeywords = {
          'social-events': 'wedding drone show India, social event drone display, marriage drone lights India',
          'corporate-events': 'corporate drone show India, business event drone display, product launch drone show India',
          'government-events': 'government drone show India, official event drone display, patriotic drone show India',
          'product-events': 'product launch drone show India, brand event drone display, marketing drone show India'
        };
        const keywords = categoryKeywords[project.category as keyof typeof categoryKeywords] || 'drone show India';
        metaKeywords.setAttribute('content', `${keywords}, ${project.tags.join(', ')}, ${project.location}, FLYBIT Dynamics, drone light show company India, aerial entertainment India`);
      }

      // Add Open Graph tags
      const addOrUpdateMeta = (property: string, content: string) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      addOrUpdateMeta('og:title', `${project.title} - Premier Drone Light Show | FLYBIT Dynamics`);
      addOrUpdateMeta('og:description', project.description);
      addOrUpdateMeta('og:type', 'article');
      addOrUpdateMeta('og:url', `https://flybitdynamics.com/projects/${project.id}`);
      addOrUpdateMeta('og:image', project.image);
      addOrUpdateMeta('og:site_name', 'FLYBIT Dynamics');
      addOrUpdateMeta('og:locale', 'en_IN');
      addOrUpdateMeta('article:author', 'FLYBIT Dynamics');
      addOrUpdateMeta('article:published_time', project.date);
      addOrUpdateMeta('article:section', project.category);
      project.tags.forEach((tag, index) => {
        addOrUpdateMeta(`article:tag${index}`, tag);
      });

      // Add Twitter Card tags
      const addOrUpdateTwitterMeta = (name: string, content: string) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      addOrUpdateTwitterMeta('twitter:card', 'summary_large_image');
      addOrUpdateTwitterMeta('twitter:title', `${project.title} | FLYBIT Dynamics`);
      addOrUpdateTwitterMeta('twitter:description', project.description);
      addOrUpdateTwitterMeta('twitter:image', project.image);
      addOrUpdateTwitterMeta('twitter:site', '@FlybitDynamics');

      // Add Event schema
      const addStructuredData = () => {
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          existingScript.remove();
        }

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": project.title,
          "description": project.description,
          "image": project.image,
          "startDate": project.date,
          "location": {
            "@type": "Place",
            "name": project.location,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": project.location.split(', ')[0],
              "addressRegion": project.location.split(', ')[1],
              "addressCountry": "IN"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "FLYBIT Dynamics",
            "url": "https://flybitdynamics.com"
          },
          "performer": {
            "@type": "Organization",
            "name": "FLYBIT Dynamics",
            "description": "Premier drone light show company in India"
          },
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "audience": {
            "@type": "Audience",
            "audienceType": project.category.replace('-', ' ')
          }
        });
        document.head.appendChild(script);
      };

      addStructuredData();
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/our-projects">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-end justify-start"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute top-8 left-8">
          <Link to="/our-projects">
            <Button variant="secondary" size="sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
        <div className="p-8 text-white z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/20">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {project.location}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(project.date).toLocaleDateString('en-IN')}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
              {project.rating}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Info */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4">Project Highlights</h3>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg aspect-video">
                        <img 
                          src={image} 
                          alt={`${project.title} gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <blockquote className="text-lg italic mb-4">
                        "{project.testimonial.text}"
                      </blockquote>
                      <div>
                        <div className="font-semibold">{project.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Attendees</span>
                      </div>
                      <span className="font-medium">{project.attendees}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Duration</span>
                      </div>
                      <span className="font-medium">{project.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Rating</span>
                      </div>
                      <span className="font-medium">{project.rating}/5.0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Love This Project?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get a similar spectacular drone show for your event
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full btn-glow">
                      Book Similar Show
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Share2 className="mr-2 w-4 h-4" />
                      Share Project
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Projects */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Similar Projects</h3>
                  <div className="space-y-4">
                    {/* This would show other projects in the same category */}
                    <Link to="/our-projects" className="block">
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <img 
                          src="/lovable-uploads/905818b5-70ce-4c63-9c27-8bf3a40fd783.png" 
                          alt="Related project"
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">Anniversary Celebration</p>
                          <p className="text-xs text-muted-foreground">Kolkata, West Bengal</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link to="/our-projects">
                    <Button variant="outline" className="w-full mt-4">
                      View All Projects
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}