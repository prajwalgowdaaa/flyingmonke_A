import React from "react";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const News = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-normal max-w-2xl leading-tight mb-12">
            News
          </h1>
          <p className="max-w-2xl text-gray-600">
            Stay updated with the latest news, events, and insights from Arch Studio. Learn about our recent project awards, design competitions, exhibitions, and thought leadership in architecture and design.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="pb-24 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
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
            <NewsCard 
              title="New sustainability framework implemented across all projects" 
              date="December 2024"
              href="/blog/sustainability-framework"
            />
            <NewsCard 
              title="Arch Studio wins Oslo Urban Design Award" 
              date="November 2024"
              href="/blog/oslo-design-award"
            />
            <NewsCard 
              title="Exhibition: Future Cities at the National Museum" 
              date="October 2024"
              href="/blog/future-cities-exhibition"
            />
            <NewsCard 
              title="Announcing our expansion to Copenhagen" 
              date="September 2024"
              href="/blog/copenhagen-expansion"
            />
            <NewsCard 
              title="Fjord Museum project featured in Architecture Today" 
              date="August 2024"
              href="/blog/fjord-museum-feature"
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

export default News;
