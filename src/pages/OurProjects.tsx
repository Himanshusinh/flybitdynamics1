import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Play } from "lucide-react";
import bannerImage from "@/assets/services-banner.jpg";

// Mock project data
const projects = [
  {
    id: 1,
    title: "Royal Wedding Celebration",
    category: "social-events",
    location: "Mumbai, Maharashtra",
    date: "2024-02-14",
    attendees: "500+",
    image: "/lovable-uploads/32653dea-0b30-472d-83b7-4682377a49ba.png",
    description: "A spectacular drone light show for a royal wedding with custom storytelling and romantic themes.",
    tags: ["Wedding", "Luxury", "Custom Animation"]
  },
  {
    id: 2,
    title: "Tech Conference Launch",
    category: "corporate-events",
    location: "Bangalore, Karnataka",
    date: "2024-01-20",
    attendees: "1000+",
    image: "/lovable-uploads/905818b5-70ce-4c63-9c27-8bf3a40fd783.png",
    description: "Product launch event with synchronized drone display showcasing company logo and brand values.",
    tags: ["Corporate", "Tech", "Brand Launch"]
  },
  {
    id: 3,
    title: "Independence Day Celebration",
    category: "government-events",
    location: "New Delhi",
    date: "2024-08-15",
    attendees: "5000+",
    image: "/lovable-uploads/ff447dbb-7066-4d66-b0e3-99bd3e8b7f9a.png",
    description: "Grand Independence Day celebration with patriotic themes and national flag formation.",
    tags: ["Government", "Patriotic", "National Event"]
  },
  {
    id: 4,
    title: "iPhone Launch Event",
    category: "product-events",
    location: "Gurgaon, Haryana",
    date: "2024-03-10",
    attendees: "800+",
    image: "/lovable-uploads/32653dea-0b30-472d-83b7-4682377a49ba.png",
    description: "Apple iPhone launch with stunning product visualization and brand storytelling in the sky.",
    tags: ["Product Launch", "Technology", "Brand"]
  },
  {
    id: 5,
    title: "Birthday Party Extravaganza",
    category: "social-gathering",
    location: "Pune, Maharashtra",
    date: "2024-04-05",
    attendees: "200+",
    image: "/lovable-uploads/905818b5-70ce-4c63-9c27-8bf3a40fd783.png",
    description: "50th birthday celebration with personalized drone show featuring family memories.",
    tags: ["Birthday", "Personal", "Family"]
  },
  {
    id: 6,
    title: "IPL Opening Ceremony",
    category: "sports-entertainment",
    location: "Chennai, Tamil Nadu",
    date: "2024-03-22",
    attendees: "50000+",
    image: "/lovable-uploads/ff447dbb-7066-4d66-b0e3-99bd3e8b7f9a.png",
    description: "Cricket tournament opening with team logos and sports-themed animations.",
    tags: ["Sports", "Cricket", "Entertainment"]
  },
  {
    id: 7,
    title: "Annual Conference 2024",
    category: "corporate-events",
    location: "Hyderabad, Telangana",
    date: "2024-05-18",
    attendees: "1200+",
    image: "/lovable-uploads/32653dea-0b30-472d-83b7-4682377a49ba.png",
    description: "Corporate annual meet with achievement celebrations and future vision display.",
    tags: ["Corporate", "Annual Meet", "Achievement"]
  },
  {
    id: 8,
    title: "Music Festival Night",
    category: "sports-entertainment",
    location: "Goa",
    date: "2024-06-12",
    attendees: "3000+",
    image: "/lovable-uploads/905818b5-70ce-4c63-9c27-8bf3a40fd783.png",
    description: "Electronic music festival with synchronized drone choreography to beats.",
    tags: ["Music", "Festival", "Entertainment"]
  },
  {
    id: 9,
    title: "Smart City Launch",
    category: "government-events",
    location: "Surat, Gujarat",
    date: "2024-07-08",
    attendees: "2000+",
    image: "/lovable-uploads/ff447dbb-7066-4d66-b0e3-99bd3e8b7f9a.png",
    description: "Smart city initiative launch with futuristic city visualization.",
    tags: ["Government", "Smart City", "Future"]
  },
  {
    id: 10,
    title: "Car Launch Spectacular",
    category: "product-events",
    location: "Noida, Uttar Pradesh",
    date: "2024-08-25",
    attendees: "600+",
    image: "/lovable-uploads/32653dea-0b30-472d-83b7-4682377a49ba.png",
    description: "Luxury car launch with elegant design showcase and brand storytelling.",
    tags: ["Automotive", "Luxury", "Product"]
  },
  {
    id: 11,
    title: "Community Festival",
    category: "social-gathering",
    location: "Jaipur, Rajasthan",
    date: "2024-09-15",
    attendees: "1500+",
    image: "/lovable-uploads/905818b5-70ce-4c63-9c27-8bf3a40fd783.png",
    description: "Local community festival celebrating cultural heritage and traditions.",
    tags: ["Community", "Culture", "Heritage"]
  },
  {
    id: 12,
    title: "Anniversary Celebration",
    category: "social-events",
    location: "Kolkata, West Bengal",
    date: "2024-10-01",
    attendees: "300+",
    image: "/lovable-uploads/ff447dbb-7066-4d66-b0e3-99bd3e8b7f9a.png",
    description: "25th wedding anniversary with romantic themes and couple's journey.",
    tags: ["Anniversary", "Romance", "Celebration"]
  },
  {
    id: 13,
    title: "Football Championship",
    category: "sports-entertainment",
    location: "Kochi, Kerala",
    date: "2024-11-20",
    attendees: "20000+",
    image: "/lovable-uploads/32653dea-0b30-472d-83b7-4682377a49ba.png",
    description: "Football championship final with team formations and victory celebrations.",
    tags: ["Football", "Championship", "Sports"]
  },
  {
    id: 14,
    title: "Banking Summit",
    category: "corporate-events",
    location: "Mumbai, Maharashtra",
    date: "2024-12-05",
    attendees: "800+",
    image: "/lovable-uploads/905818b5-70ce-4c63-9c27-8bf3a40fd783.png",
    description: "Financial sector summit with digital banking theme and innovation showcase.",
    tags: ["Banking", "Finance", "Innovation"]
  },
  {
    id: 15,
    title: "Engagement Ceremony",
    category: "social-events",
    location: "Udaipur, Rajasthan",
    date: "2024-12-20",
    attendees: "400+",
    image: "/lovable-uploads/ff447dbb-7066-4d66-b0e3-99bd3e8b7f9a.png",
    description: "Royal engagement ceremony with traditional and modern elements combined.",
    tags: ["Engagement", "Royal", "Traditional"]
  },
  {
    id: 16,
    title: "Smartphone Launch",
    category: "product-events",
    location: "Chennai, Tamil Nadu",
    date: "2024-01-30",
    attendees: "700+",
    image: "/lovable-uploads/32653dea-0b30-472d-83b7-4682377a49ba.png",
    description: "Latest smartphone launch with tech innovations and feature highlights.",
    tags: ["Smartphone", "Technology", "Innovation"]
  },
  {
    id: 17,
    title: "Republic Day Parade",
    category: "government-events",
    location: "Lucknow, Uttar Pradesh",
    date: "2024-01-26",
    attendees: "8000+",
    image: "/lovable-uploads/905818b5-70ce-4c63-9c27-8bf3a40fd783.png",
    description: "Republic Day celebration with patriotic formations and national pride display.",
    tags: ["Republic Day", "Patriotic", "National"]
  },
  {
    id: 18,
    title: "Family Reunion",
    category: "social-gathering",
    location: "Chandigarh",
    date: "2024-02-28",
    attendees: "150+",
    image: "/lovable-uploads/ff447dbb-7066-4d66-b0e3-99bd3e8b7f9a.png",
    description: "Large family reunion with personalized family tree and memories display.",
    tags: ["Family", "Reunion", "Personal"]
  },
  {
    id: 19,
    title: "Concert Night Magic",
    category: "sports-entertainment",
    location: "Ahmedabad, Gujarat",
    date: "2024-03-15",
    attendees: "4000+",
    image: "/lovable-uploads/32653dea-0b30-472d-83b7-4682377a49ba.png",
    description: "Live concert with synchronized drone choreography enhancing musical experience.",
    tags: ["Concert", "Music", "Live Performance"]
  },
  {
    id: 20,
    title: "Company Milestone",
    category: "corporate-events",
    location: "Indore, Madhya Pradesh",
    date: "2024-04-22",
    attendees: "900+",
    image: "/lovable-uploads/905818b5-70ce-4c63-9c27-8bf3a40fd783.png",
    description: "Company's 10th anniversary celebration with growth story and future vision.",
    tags: ["Milestone", "Anniversary", "Corporate"]
  }
];

const categories = [
  { id: "all", name: "All Projects", count: projects.length },
  { id: "social-events", name: "Social Events", count: projects.filter(p => p.category === "social-events").length },
  { id: "corporate-events", name: "Corporate Events", count: projects.filter(p => p.category === "corporate-events").length },
  { id: "government-events", name: "Government Events", count: projects.filter(p => p.category === "government-events").length },
  { id: "product-events", name: "Product Events", count: projects.filter(p => p.category === "product-events").length },
  { id: "social-gathering", name: "Social Gathering", count: projects.filter(p => p.category === "social-gathering").length },
  { id: "sports-entertainment", name: "Sports & Entertainment", count: projects.filter(p => p.category === "sports-entertainment").length },
];

export default function OurProjects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");

  useEffect(() => {
    document.title = "Our Projects - FLYBIT Dynamics | Drone Light Show Portfolio India";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Explore our portfolio of stunning drone light shows across India. From wedding shows to corporate events, see how FLYBIT Dynamics creates magical experiences with drone technology.');
  }, []);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.find(c => c.id === category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover our portfolio of spectacular drone light shows across India
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className="w-full justify-between text-left"
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Projects Grid */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">
                  {categories.find(c => c.id === selectedCategory)?.name || "All Projects"}
                </h2>
                <p className="text-muted-foreground">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                       <Link to={`/project/${project.id}`} className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <Button size="lg" className="btn-glow">
                           <Play className="mr-2 w-5 h-5" />
                           View Project
                         </Button>
                       </Link>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {project.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(project.date).toLocaleDateString('en-IN', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {project.attendees} attendees
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                 ))}
               </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">No projects found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}