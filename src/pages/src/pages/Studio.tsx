import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Studio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-normal max-w-2xl leading-tight mb-12">
            Studio
          </h1>
          <p className="max-w-2xl text-gray-600">
            Founded in 1998, Arch Studio has grown from a small partnership to a renowned architectural practice with international reach. Our multidisciplinary team brings together architects, engineers, designers, and thinkers who create exceptional spaces.
          </p>
        </div>
      </section>

      {/* Studio Image */}
      <section className="pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3"
              alt="Arch Studio Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="pb-24 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-normal mb-8">Our approach</h2>
              <p className="text-gray-700 mb-6">
                We believe architecture should respond to the cultural, social and environmental context in which it exists. Our designs seek to enhance the human experience through thoughtful spatial relationships, materiality, and integration with nature.
              </p>
              <p className="text-gray-700">
                Sustainability and innovation are at the core of our design process. We leverage advanced technologies and traditional craft to create architecture that is both forward-thinking and timeless.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-normal mb-8">Our team</h2>
              <p className="text-gray-700 mb-6">
                Our studio brings together a diverse team of architects, designers, and thinkers from around the world. This cultural diversity enriches our design process and enables us to approach projects with multiple perspectives.
              </p>
              <p className="text-gray-700">
                We foster a collaborative environment where creativity thrives, and ideas are shared openly. This approach allows us to deliver innovative solutions that exceed our clients' expectations.
              </p>
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
            © flyingmonké {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Studio;
