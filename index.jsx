import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const publications = [
  {
    title: "Exploring the Multidimensional Challenges in Integrating Design for Safety (DfS) in the Ghanaian Construction Industry",
    description: "This study investigates the various challenges faced in implementing Design for Safety principles within Ghana's construction sector.",
    link: "https://doi.org/10.1108/JEDT-02-2023-0085",
  },
  {
    title: "Analysis of the Underlying Factors Affecting BIM-LCA Integration in the Ghanaian Construction Industry: A Factor Analysis Approach",
    description: "This research examines the factors influencing the integration of Building Information Modeling and Life Cycle Assessment in Ghana's construction industry.",
    link: "https://doi.org/10.1108/CI-01-2023-0012",
  },
  {
    title: "Impact of Construction Workers Informal Safety Communication (CWISC) on Safety Performance on Construction Sites",
    description: "This paper explores how informal safety communication among construction workers affects overall safety performance on construction sites.",
    link: "https://doi.org/10.1108/ECAM-03-2023-0250",
  },
  {
    title: "Provision of Access for Persons with Disabilities in Selected Sports Stadiums In Ghana",
    description: "An evaluation of the accessibility features available for persons with disabilities in various sports stadiums across Ghana.",
    link: "https://ajmess.org/index.php/ajmess/article/view/168",
  },
];

export default function Home() {
  const [index, setIndex] = useState(-1);
  const images = [
    "/images/elvis1.jpg",
    "/images/elvis2.jpg",
    "/images/elvis3.jpg",
    "/images/elvis4.jpg",
    "/images/elvis5.jpg",
    "/images/elvis6.jpg",
    "/images/elvis7.jpg",
  ];

  return (
    <main className="min-h-screen bg-white text-black p-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm EAK
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A PhD student in Civil Engineering with a deep passion for research in construction safety, BIM, and accessibility in the built environment.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="mailto:elvisadjeikonadu@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
          <Button variant="outline"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/elvis-adjei-konadu-a25210200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>
      ...
    </main>
  );
}
