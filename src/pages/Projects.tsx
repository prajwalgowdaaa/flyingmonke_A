import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-normal max-w-2xl leading-tight mb-12">
            Projects
          </h1>
          <p className="max-w-2xl text-gray-600">
            Our portfolio showcases a diverse range of architectural projects spanning residential, commercial, cultural, and public spaces. Each project reflects our commitment to innovative design, sustainability, and enhancing the human experience.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
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
            <ProjectCard 
              title="Harbor Front Development"
              location="Copenhagen, Denmark"
              image="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3"
              href="/projects/harbor-front"
            />
            <ProjectCard 
              title="Urban Renewal District"
              location="Gothenburg, Sweden"
              image="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3"
              href="/projects/urban-renewal"
            />
            <ProjectCard 
              title="Mountain View Pavilion"
              location="Ålesund, Norway"
              image="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3"
              href="/projects/mountain-pavilion"
            />
          </div>
        </div>
      </section>

      {/* Footer - Updated to match home page */}
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
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
