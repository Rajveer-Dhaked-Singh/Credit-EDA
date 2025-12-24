import Hero from "./components/Hero";
import Counter from "./components/Counter";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("./components/ContactForm"), { ssr: false });

export default function Home() {
  return (
    <div className="">
      <Hero />

      {/* About */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img src="/about-image.jpg" alt="About Aditya" className="rounded-lg shadow-lg w-full object-cover h-80" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">About <span className="text-indigo-600">Me</span></h2>
            <h4 className="mt-2 text-lg text-gray-600 dark:text-gray-300">Full Stack Developer & Problem Solver</h4>
            <p className="mt-4 text-gray-700 dark:text-gray-200">I'm a passionate software developer with over 3 years of experience building scalable web applications and implementing cutting-edge AI solutions.</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">I specialize in modern web technologies, including React, Node.js, Python, and cloud platforms. My work focuses on creating intuitive user experiences backed by robust, efficient systems.</p>
            <a href="/resume.pdf" className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md" download>Download CV</a>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow">
            <h3 className="text-2xl font-bold"><Counter to={3} />+</h3>
            <p className="text-gray-500">Years Experience</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow">
            <h3 className="text-2xl font-bold"><Counter to={50} />+</h3>
            <p className="text-gray-500">Projects Completed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow">
            <h3 className="text-2xl font-bold"><Counter to={1200} />+</h3>
            <p className="text-gray-500">Active Users</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow">
            <h3 className="text-2xl font-bold"><Counter to={15} />+</h3>
            <p className="text-gray-500">Technologies</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">My <span className="text-indigo-600">Skills</span></h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
              <h3 className="font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <SkillBar skill="HTML5" percent={90} color="bg-red-500" />
                <SkillBar skill="CSS3" percent={85} color="bg-blue-600" />
                <SkillBar skill="JavaScript" percent={80} color="bg-yellow-400" />
                <SkillBar skill="React" percent={85} color="bg-sky-400" />
                <SkillBar skill="Python" percent={88} color="bg-teal-600" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
              <h3 className="font-semibold mb-4">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">90%</div>
                  <div className="text-gray-500">Problem Solving</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-gray-500">Creativity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">75%</div>
                  <div className="text-gray-500">Communication</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-gray-500">Team Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Latest <span className="text-indigo-600">Projects</span></h2>
          <p className="text-gray-500 mt-2">Here are some of my recent works that showcase my skills and creativity</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                <img src={`/project${i + 1}.jpg`} alt={`project ${i + 1}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">Project Title</h3>
                  <p className="text-gray-500 text-sm mt-1">Short description about the project and tech used.</p>
                  <div className="mt-3 flex gap-2">
                    <a href="#" className="text-indigo-600">Live</a>
                    <a href="#" className="text-gray-500">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold">Get In <span className="text-indigo-600">Touch</span></h2>
            <p className="mt-2 text-gray-500">Have a project in mind? Let's work together to bring your ideas to life</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-indigo-600">📞</span>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-500">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-indigo-600">✉️</span>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-500">aditya.sahani@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-indigo-600">📍</span>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-500">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form implemented as a separate client component */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function SkillBar({ skill, percent, color }: { skill: string; percent: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-sm text-gray-500">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
        <div className={`${color} h-2`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
