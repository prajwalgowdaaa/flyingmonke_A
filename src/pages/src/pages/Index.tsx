import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import StatCard from "../components/StatCard";
import NewsCard from "../components/NewsCard";
import Slideshow from "../components/Slideshow";
import ExpandableInfo from "../components/ExpandableInfo";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Slideshow />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-normal max-w-3xl leading-tight">
            We believe in making better landscapes, cityscapes and buildings for all people
          </h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading">
                We have a high degree of diverse assignments. Projects are widely spread and take place in a variety of contexts
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700">
                Our team works on projects that include large-scale urban planning, landscape designs, commercial properties, cultural and educational environments.
              </p>
              <p className="text-gray-700">
                Each project becomes a chance to push boundaries and create designs grounded both in creative expression and functionality, with a deep commitment to sustainability and community well-being.
              </p>
              <div>
                <Link to="/studio" className="inline-block border-b border-black pb-1 hover:pb-2 transition-all">
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 border-t border-gray-200">
            <StatCard number="27" label="Years Experience" />
            <StatCard number="9" label="Awards" />
            <StatCard number="28" label="Team Members" />
            <StatCard number="70" label="Projects" />
          </div>
        </div>
      </section>

      {/* Philosophy Section with Expandable Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading max-w-2xl">
            Work of flying<span className="font-bold">monké</span> interprets the spatial continuity between exterior and interior landscapes in new ways
          </h2>

          <div className="mt-16 space-y-4">
            <ExpandableInfo 
              title="Architecture" 
              content="Our architectural practice focuses on creating spaces that respond sensitively to their context and users' needs. We believe in a holistic approach that combines innovative design thinking with sustainable practices, resulting in buildings that are both aesthetically pleasing and functionally efficient. Each project is an opportunity to explore the dialogue between form, light, and materiality, creating environments that enhance the human experience."
            />
            <ExpandableInfo 
              title="Engineering" 
              content="Our engineering expertise ensures that creative vision meets technical excellence. We integrate advanced structural solutions and building systems that support architectural innovation while optimizing performance and sustainability. Our collaborative approach brings together specialists in structural, mechanical, electrical, and environmental engineering to address complex challenges and deliver integrated solutions that balance ambition with feasibility."
            />
            <ExpandableInfo 
              title="Landscape" 
              content="Our landscape design philosophy celebrates the inherent character of each site while creating meaningful connections between people and nature. We craft outdoor environments that enhance biodiversity, manage water resources thoughtfully, and create spaces for community engagement and well-being. From urban parks to private gardens, we design resilient landscapes that evolve beautifully over time and respond to seasonal changes."
            />
            <ExpandableInfo 
              title="Urbanism" 
              content="Our urban design practice addresses the complexities of contemporary cities by developing strategies that enhance livability, connectivity, and sustainability. We work at multiple scales—from neighborhoods to entire districts—to create vibrant urban spaces that foster social interaction and economic vitality while respecting cultural heritage. Our approach integrates transportation networks, public spaces, and built form to create cohesive urban environments that respond to both present needs and future challenges."
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-heading">
            We have received high scores in client's satisfaction in our projects, some with the project period nearly 10 years
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Sandfjord Quarter"
              location="Oslo, Norway"
              image="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3"
              href="/projects/sandfjord-quarter"
            />
            <ProjectCard 
              title="Noromsvien"
              location="Bergen, Norway"
              image="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3"
              href="/projects/noromsvien"
            />
            <ProjectCard 
              title="Kongsberg II"
              location="Kongsberg, Norway"
              image="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3"
              href="/projects/kongsberg-ii"
            />
            <ProjectCard 
              title="Fjord Museum"
              location="Flåm, Norway"
              image="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3"
              href="/projects/fjord-museum"
            />
            <ProjectCard 
              title="The Atrium"
              location="Stockholm, Sweden"
              image="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3"
              href="/projects/the-atrium"
            />
            <ProjectCard 
              title="Community Church Kirkenes"
              location="Kirkenes, Norway"
              image="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3"
              href="/projects/community-church"
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
              All projects
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section (formerly News) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">
            Stay updated on our latest projects, achievements, and events
          </h2>

          <div className="bg-white">
            <NewsCard 
              title="Redefining Luxuriance, Luxembourg"
              date="March 2025"
              href="/blog/redefining-luxuriance"
            />
            <NewsCard 
              title="Competing: The Old Waterway School & Office"
              date="February 2025" 
              href="/blog/old-waterway-competition"
            />
            <NewsCard 
              title="Winning proposal joint for Glasserie site at Charleroi" 
              date="January 2025"
              href="/blog/charleroi-proposal"
            />
          </div>

          <div className="mt-8">
            <Link to="/blog" className="inline-block border-b border-black pb-1 hover:pb-2 transition-all">
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding border-t border-gray-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-4 text-xl font-medium tracking-tighter">flying<span className="font-bold">monké</span></div>
              <address className="not-italic text-sm text-gray-600 mb-6">
                Josefines gate 7<br />
                0351 Oslo, Norway
              </address>
            </div>
            <div className="md:text-right">
              <h3 className="text-2xl mb-4">info@flyingmonke.no</h3>
              <div className="flex md:justify-end space-x-4 mb-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
              <div className="flex flex-col md:items-end space-y-1 text-sm">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/projects" className="hover:underline">Projects</Link>
                <Link to="/studio" className="hover:underline">Studio</Link>
                <Link to="/blog" className="hover:underline">Blog</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-6 border-t border-gray-200 text-xs text-gray-400">
            © flyingmonké {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
