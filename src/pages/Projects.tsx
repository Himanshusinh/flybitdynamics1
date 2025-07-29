import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import serviceSocial from "@/assets/service-social.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceGovernment from "@/assets/service-government.jpg";
import serviceProduct from "@/assets/service-product.jpg";
import serviceSpiritual from "@/assets/service-spiritual.jpg";
import serviceSports from "@/assets/service-sports.jpg";

const categories = [
  "All Projects",
  "Social Events",
  "Corporate Events", 
  "Government & National Events",
  "Product Launches",
  "Spiritual Gatherings",
  "Sports & Entertainment"
];

// Sample project data with multiple images per category
const projects = [
  // Social Events
  { id: 1, title: "Wedding Light Show - Mumbai", category: "Social Events", image: serviceSocial, description: "Romantic heart formations and couple's initials for a dream wedding" },
  { id: 2, title: "Anniversary Celebration - Delhi", category: "Social Events", image: serviceSocial, description: "25th anniversary celebration with golden light displays" },
  { id: 3, title: "Birthday Spectacular - Pune", category: "Social Events", image: serviceSocial, description: "50th birthday celebration with personalized sky messages" },
  
  // Corporate Events
  { id: 4, title: "Tech Company Launch - Bangalore", category: "Corporate Events", image: serviceCorporate, description: "Product launch with 3D logo animation and brand messaging" },
  { id: 5, title: "Banking Conference - Hyderabad", category: "Corporate Events", image: serviceCorporate, description: "Annual conference opener with company values display" },
  { id: 6, title: "Automobile Launch - Chennai", category: "Corporate Events", image: serviceCorporate, description: "New car model reveal with dynamic formations" },
  
  // Government & National Events
  { id: 7, title: "Republic Day - New Delhi", category: "Government & National Events", image: serviceGovernment, description: "Patriotic tricolor formation at India Gate" },
  { id: 8, title: "G20 Summit Opening - Goa", category: "Government & National Events", image: serviceGovernment, description: "International summit celebration with unity themes" },
  { id: 9, title: "Independence Day - Mumbai", category: "Government & National Events", image: serviceGovernment, description: "Freedom celebration with national symbols" },
  
  // Product Launches
  { id: 10, title: "Smartphone Launch - Delhi", category: "Product Launches", image: serviceProduct, description: "Tech product reveal with countdown sequences" },
  { id: 11, title: "Fashion Show Opening - Mumbai", category: "Product Launches", image: serviceProduct, description: "Designer collection launch with artistic displays" },
  { id: 12, title: "Electric Vehicle Launch - Pune", category: "Product Launches", image: serviceProduct, description: "Eco-friendly product reveal with green themes" },
  
  // Spiritual Gatherings
  { id: 13, title: "Diwali Celebration - Varanasi", category: "Spiritual Gatherings", image: serviceSpiritual, description: "Festival of lights with traditional patterns" },
  { id: 14, title: "Temple Opening - Rishikesh", category: "Spiritual Gatherings", image: serviceSpiritual, description: "Sacred ceremony with Om and lotus formations" },
  { id: 15, title: "Spiritual Retreat - Haridwar", category: "Spiritual Gatherings", image: serviceSpiritual, description: "Meditation event with peaceful geometric displays" },
  
  // Sports & Entertainment
  { id: 16, title: "IPL Opening - Mumbai", category: "Sports & Entertainment", image: serviceSports, description: "Cricket league opening with team mascots" },
  { id: 17, title: "Music Festival - Goa", category: "Sports & Entertainment", image: serviceSports, description: "Concert opener with synchronized music displays" },
  { id: 18, title: "Football Stadium - Kolkata", category: "Sports & Entertainment", image: serviceSports, description: "Stadium activation with victory celebrations" }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useEffect(() => {
    document.title = "Projects Gallery - FLYBIT Dynamics | Drone Light Show Portfolio India";
    
    // Create meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore FLYBIT Dynamics drone light show project gallery. Wedding shows, corporate events, government celebrations, product launches across India. Professional aerial displays portfolio.');
    }
    
    // Add Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Projects Gallery - FLYBIT Dynamics Drone Light Show Portfolio');
    if (!document.querySelector('meta[property="og:title"]')) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Stunning drone light show projects across India. Wedding displays, corporate events, government celebrations by leading drone show company.');
    if (!document.querySelector('meta[property="og:description"]')) document.head.appendChild(ogDescription);

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) document.head.appendChild(ogType);

    // Add keywords
    const keywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'drone light show projects, Indian drone shows, wedding drone displays, corporate drone events, government drone shows, drone light show portfolio, aerial light displays India');
    if (!document.querySelector('meta[name="keywords"]')) document.head.appendChild(keywords);
  }, []);

  const filteredProjects = selectedCategory === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleImageClick = (project: any) => {
    setSelectedImage(project.image);
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl h-[260px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover the magic we've created across India. From intimate celebrations to grand spectacles, 
            each project tells a unique story written in lights across the sky.
          </p>
          <Badge variant="secondary" className="text-lg px-6 py-2">
            {projects.length}+ Successful Projects
          </Badge>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2 text-sm font-medium transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {selectedCategory === "All Projects" ? "All Projects" : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} in this category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group cursor-pointer card-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                onClick={() => handleImageClick(project)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedProject?.title}
          </DialogTitle>
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-4 h-4" />
            </Button>
            {selectedImage && (
              <div>
                <img
                  src={selectedImage}
                  alt={selectedProject?.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-6 bg-background">
                  <Badge variant="outline" className="mb-3">
                    {selectedProject?.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{selectedProject?.title}</h3>
                  <p className="text-muted-foreground">{selectedProject?.description}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your vision and create a drone light show that will become part of your most cherished memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Custom Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-[#3D473B] border-white bg-white hover:bg-primary hover:text-white text-lg px-8 py-4"
            >
              View More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}