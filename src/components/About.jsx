import React from "react";
import AboutImage from "../assets/images/Profile.jfif";

const About = () => {
  return (
    <section id="about" className="py-2 bg-white font-raleway">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">
            Get to know
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            About Me
          </h1>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column - Image with Decorative Frame */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Decorative background box */}
            
              <div className="rounded-full overflow-hidden shadow-2xl  p-1">
                <img
                  src={AboutImage}
                  alt="Mst. Mahfuza Akter - MERN Stack Developer"
                  className="w-64 h-80 md:w-80 md:h-[450px] object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-3/5">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl font-medium text-primary">
                Hi, I'm <span className="text-secondary font-bold">Mst. Mahfuza Akter</span>, 
                a MERN Stack Developer driven by the challenge of solving complex problems.
              </p>
              
              <p className="text-justify">
                My journey began with the basics of the web, but my passion truly ignited 
                when I discovered the power of <strong>React</strong> and the <strong>MERN Stack</strong>. 
                I specialize in building scalable, performant applications that don't just work—they 
                provide an exceptional user experience through clean and maintainable code.
              </p>

              <p className="text-justify">
                Currently, I am focused on collaborative development, contributing to projects 
                like <strong>E-commerce platforms</strong> and <strong>MERN-based systems</strong>. 
                I am a lifelong learner who stays updated with UI/UX research and SEO trends 
                to ensure my applications are as visible as they are functional.
              </p>

              {/* Personal Interests / Fun Facts */}
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-secondary italic text-gray-600">
                "When I'm not coding, you’ll find me exploring off-road trails on my motorcycle, 
                mastering a chess match, or organizing my workspace for maximum productivity."
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;