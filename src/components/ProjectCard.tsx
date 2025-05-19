import React from "react";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, location, image, href }) => {
  return (
    <a
      href={href}
      className="block group relative overflow-hidden transition-all hover:opacity-95"
    >
      <div className="aspect-[4/3] md:aspect-[3/2] lg:aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-white text-lg font-medium mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{location}</p>
          </div>
          <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
