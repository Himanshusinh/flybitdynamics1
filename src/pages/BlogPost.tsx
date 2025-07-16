import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, Clock, User, ArrowLeft, Heart, Share2, Bookmark } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Welcome to FLYBIT Dynamics: Where Wonder Begins",
    excerpt: "Discover the story behind India's premier drone light show company and our mission to transform celebrations into magical experiences.",
    content: `<h2>The Beginning of Something Magical</h2>
    <p>At FLYBIT Dynamics, we believe that every celebration deserves a touch of magic. Our journey began with a simple vision: to revolutionize how we celebrate life's most precious moments through cutting-edge drone technology.</p>
    
    <h3>Our Mission</h3>
    <p>Founded in the heart of India's tech revolution, FLYBIT Dynamics emerged from a passion for storytelling and innovation. We saw the potential to replace traditional fireworks with something more spectacular, more personal, and completely eco-friendly.</p>
    
    <h3>What Makes Us Different</h3>
    <p>While others see drones as mere technology, we see them as brushes painting stories across the canvas of the night sky. Each performance is meticulously crafted to reflect your unique story, values, and emotions.</p>
    
    <p>Our team combines technical expertise with artistic vision, ensuring that every show is not just a display of lights, but a narrative that resonates with your audience long after the last drone has landed.</p>
    
    <h3>Looking Forward</h3>
    <p>As we continue to grow, our commitment remains unchanged: to create experiences that transcend the ordinary and touch the extraordinary. Welcome to FLYBIT Dynamics, where wonder truly begins.</p>`,
    category: "Company News",
    author: "Rajesh Kumar",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/api/placeholder/800/400",
    featured: true,
    tags: ["company", "innovation", "technology"]
  },
  {
    id: 2,
    title: "Top 5 Drone Show Ideas for Weddings That Will Leave Guests Speechless",
    excerpt: "From romantic heart formations to personalized love stories in the sky, discover the most popular wedding drone show concepts.",
    content: `<h2>Making Your Wedding Unforgettable</h2>
    <p>Your wedding day is one of the most important days of your life, and it deserves to be truly unforgettable. Here are five spectacular drone show ideas that will transform your special day into a magical experience:</p>
    
    <h3>1. The Love Story Animation</h3>
    <p>Tell your unique love story through a sequence of formations that represent key moments in your relationship - from the first meeting to the proposal, culminating in a grand finale that spells out your names or wedding date.</p>
    
    <h3>2. Cultural Heritage Display</h3>
    <p>Honor your cultural backgrounds with traditional symbols, religious motifs, or regional designs that celebrate your heritage while creating stunning visual narratives.</p>
    
    <h3>3. The Heart Transformation</h3>
    <p>Begin with a single point of light that gradually transforms into a beating heart, then multiplies into hundreds of hearts that dance across the sky in perfect synchronization.</p>
    
    <h3>4. Interactive Guest Experience</h3>
    <p>Create moments where your guests can participate by having drones respond to music, applause, or even coordinated smartphone lights, making everyone part of the show.</p>
    
    <h3>5. The Grand Finale Portrait</h3>
    <p>End the evening with a stunning aerial portrait of the couple or a meaningful symbol that represents your union, creating the perfect backdrop for your last dance.</p>
    
    <p>Each of these concepts can be customized to reflect your personal style, venue, and vision. The key is to work with experienced professionals who can bring your dreams to life safely and spectacularly.</p>`,
    category: "Wedding Ideas",
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/api/placeholder/800/400",
    featured: true,
    tags: ["wedding", "ideas", "romance"]
  },
  {
    id: 3,
    title: "Behind the Scenes: Creating a 500-Drone Spectacular",
    excerpt: "Take a deep dive into the technical complexity and creative process behind our largest drone light shows.",
    content: `<h2>The Complexity Behind the Beauty</h2>
    <p>Ever wondered what it takes to coordinate 500 drones in perfect synchronization? Join us behind the scenes as we reveal the intricate planning, cutting-edge technology, and artistic vision that goes into creating our most spectacular shows.</p>
    
    <h3>Pre-Planning Phase</h3>
    <p>Every show begins months in advance with detailed site surveys, weather analysis, and regulatory approvals. Our team works closely with local authorities to ensure all safety protocols are met.</p>
    
    <h3>Design and Choreography</h3>
    <p>Using advanced 3D modeling software, our creative team designs each formation and transition. Every drone's path is calculated to the centimeter, ensuring smooth movements and avoiding collisions.</p>
    
    <h3>Technical Preparations</h3>
    <p>Each drone undergoes rigorous testing and calibration. GPS coordinates are programmed, LED systems are synchronized, and backup protocols are established for any contingencies.</p>
    
    <h3>The Performance</h3>
    <p>On show night, our ground control team monitors every aspect in real-time. Advanced algorithms ensure perfect timing while safety systems stand ready to intervene if needed.</p>
    
    <h3>Innovation Never Stops</h3>
    <p>We're constantly pushing boundaries, developing new formations, improving flight patterns, and exploring creative possibilities that seemed impossible just years ago.</p>`,
    category: "Technology",
    author: "Dr. Amit Patel",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "/api/placeholder/800/400",
    featured: true,
    tags: ["technology", "behind-scenes", "innovation"]
  },
  {
    id: 4,
    title: "How Drone Shows Are Leading the Eco-Friendly Entertainment Revolution",
    excerpt: "Explore how drone light shows offer a sustainable alternative to traditional fireworks while delivering even more spectacular results.",
    content: `<h2>A Sustainable Future for Celebrations</h2>
    <p>In an era where environmental consciousness is paramount, drone light shows emerge as the perfect solution for spectacular entertainment without environmental impact.</p>
    
    <h3>Zero Environmental Impact</h3>
    <p>Unlike traditional fireworks, drone shows produce no smoke, chemical residue, or noise pollution. This makes them perfect for environmentally sensitive areas and indoor venues.</p>
    
    <h3>Wildlife Friendly</h3>
    <p>The silent operation of LED drones means no stress to wildlife, pets, or livestock. This consideration has made drone shows the preferred choice for nature reserves and rural celebrations.</p>
    
    <h3>Reusable Technology</h3>
    <p>Every drone in our fleet can be used thousands of times, making them infinitely more sustainable than single-use fireworks. This efficiency also provides better value for our clients.</p>
    
    <h3>Precision Control</h3>
    <p>Digital precision allows for perfect repeatability and customization impossible with traditional pyrotechnics. Weather delays become minimal, and shows can be adapted in real-time.</p>
    
    <h3>The Future is Now</h3>
    <p>As environmental regulations tighten and consciousness grows, drone shows represent not just an alternative, but an evolution in how we celebrate responsibly.</p>`,
    category: "Sustainability",
    author: "Environmental Team",
    date: "2023-12-28",
    readTime: "6 min read",
    image: "/api/placeholder/800/400",
    featured: false,
    tags: ["environment", "sustainability", "innovation"]
  },
  {
    id: 5,
    title: "Corporate Branding in the Sky: How to Make Your Brand Unforgettable",
    excerpt: "Learn how leading companies are using drone light shows to create powerful brand experiences that resonate with audiences.",
    content: `<h2>Elevating Your Brand to New Heights</h2>
    <p>Corporate events have evolved beyond traditional presentations and networking. Today's successful companies are taking their brand stories to new heights—literally.</p>
    
    <h3>Logo Animation Magic</h3>
    <p>Transform your static logo into a dynamic story. Watch as your brand mark comes alive, morphs, and evolves in the sky, creating memorable impressions that last far beyond the event.</p>
    
    <h3>Product Launch Spectacular</h3>
    <p>Unveil new products with formations that showcase features, benefits, and brand values in ways that traditional media simply cannot match.</p>
    
    <h3>Values Visualization</h3>
    <p>Abstract concepts like innovation, growth, and sustainability can be powerfully represented through carefully choreographed drone formations that speak to your audience's emotions.</p>
    
    <h3>Social Media Amplification</h3>
    <p>Drone shows are inherently shareable. The unique visuals generate organic social media content that extends your brand reach far beyond the physical event.</p>
    
    <h3>Measurable Impact</h3>
    <p>Track engagement through social mentions, media coverage, and attendee feedback. Many clients report significantly higher brand recall and positive sentiment following drone show events.</p>`,
    category: "Corporate",
    author: "Marketing Team",
    date: "2023-12-20",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    featured: false,
    tags: ["corporate", "branding", "marketing"]
  },
  {
    id: 6,
    title: "The Science of Synchronization: How We Achieve Perfect Aerial Choreography",
    excerpt: "Dive into the technical aspects of drone coordination, GPS precision, and the algorithms that make magical performances possible.",
    content: `<h2>The Mathematics of Magic</h2>
    <p>Creating a perfectly synchronized drone light show is part art, part science, and completely magical. The technical precision required to coordinate hundreds of drones demands advanced algorithms and split-second timing.</p>
    
    <h3>GPS Precision Technology</h3>
    <p>Every drone maintains centimeter-level accuracy using RTK GPS systems. This precision allows for formations that would be impossible with standard navigation systems.</p>
    
    <h3>Collision Avoidance Systems</h3>
    <p>Advanced algorithms continuously calculate optimal flight paths, ensuring safe spacing while maintaining formation integrity. Multiple backup systems provide redundancy for complete safety.</p>
    
    <h3>Real-Time Adaptation</h3>
    <p>Weather conditions are monitored continuously, with flight paths adjusted in real-time to compensate for wind, temperature, and atmospheric conditions.</p>
    
    <h3>Communication Networks</h3>
    <p>High-frequency communication systems ensure instant command transmission to the entire fleet, with backup channels ready to maintain control under any circumstances.</p>
    
    <h3>The Future of Coordination</h3>
    <p>We're developing AI-powered systems that will enable even more complex formations and real-time creative adaptations based on audience response and environmental factors.</p>`,
    category: "Technology",
    author: "Technical Team",
    date: "2023-12-15",
    readTime: "12 min read",
    image: "/api/placeholder/800/400",
    featured: false,
    tags: ["technology", "science", "precision"]
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || "0"));

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - FLYBIT Dynamics Blog`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', post.excerpt);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
          
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between text-muted-foreground mb-8 flex-wrap gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarDays className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-muted/50 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-primary/20 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="opacity-90">Featured Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Related <span className="text-primary">Articles</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden card-gradient hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <div className="aspect-video bg-muted/50 relative">
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{relatedPost.category}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                      <div className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>

                    <Link to={`/blog/${relatedPost.id}`}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}