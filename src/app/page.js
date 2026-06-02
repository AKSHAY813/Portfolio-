"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

function AnimatedShape() {
  const meshRef = useRef()
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.005
    }
  })
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#3A86FF"
          speed={2}
          distort={0.4}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-textPrimary">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-bg/70 border-b border-surface">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider">AKSHAY.DEV</h1>
          <div className="hidden md:flex gap-8 text-sm text-textSecondary">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <AnimatedShape />
          </Canvas>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <p className="text-accent text-sm tracking-[0.3em] mb-4">PORTFOLIO 2025</p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight glow-text">
            AKSHAY BABU
          </h1>
          <p className="text-lg md:text-2xl text-textSecondary mt-6 max-w-2xl mx-auto">
            Full-Stack Developer & Data Analyst
          </p>
          <p className="text-sm md:text-base text-textSecondary mt-2">
            Engineering web, mobile & data-driven experiences.
          </p>
          <div className="flex gap-4 justify-center mt-10">
            <a href="#projects" className="px-6 py-3 bg-accent text-white rounded-full text-sm font-medium glow hover:scale-105 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-textSecondary rounded-full text-sm font-medium hover:border-accent hover:text-accent transition">
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-sm tracking-[0.3em] mb-4">01 — ABOUT</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Building <span className="text-accent">engineered</span> systems.
          </h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            BCA student specializing in Cloud Computing & Data Science at Chaitanya Deemed University.
            I've interned at <span className="text-textPrimary font-medium">Sunstone Eduversity</span> (Web Development)
            and <span className="text-textPrimary font-medium">Lifeboat Technologies</span> (Android Development),
            where I shipped a live production app using Kotlin.
          </p>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6 max-w-4xl mx-auto">
        <p className="text-accent text-sm tracking-[0.3em] mb-4">02 — EXPERIENCE</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Work History</h2>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-accent pl-6 py-2"
          >
            <p className="text-xs text-textSecondary tracking-wider">3 MONTHS · PAID INTERNSHIP</p>
            <h3 className="text-2xl font-bold mt-1">Android Developer Intern</h3>
            <p className="text-accent">Lifeboat Technologies</p>
            <ul className="mt-4 space-y-2 text-textSecondary text-sm">
              <li>→ Developed Android applications using Kotlin with modern UI/UX practices</li>
              <li>→ Designed & implemented key features for a fully functional mobile application</li>
              <li>→ Successfully built and deployed a live application on production</li>
              <li>→ Worked on app performance optimization and bug fixing</li>
              <li>→ Collaborated with team to improve app functionality and UX</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-surface pl-6 py-2"
          >
            <p className="text-xs text-textSecondary tracking-wider">APR 2024 — SEP 2024</p>
            <h3 className="text-2xl font-bold mt-1">Web Development Intern</h3>
            <p className="text-accent">Sunstone Eduversity</p>
            <ul className="mt-4 space-y-2 text-textSecondary text-sm">
              <li>→ Built responsive SPA using HTML5, CSS3, JavaScript ES6+</li>
              <li>→ Boosted user engagement by 30% via UI/UX enhancements</li>
              <li>→ Achieved 20% performance gains through lazy loading & minification</li>
              <li>→ Led code refactoring for maintainability</li>
              <li>→ Implemented WCAG 2.1 accessibility compliance</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-accent text-sm tracking-[0.3em] mb-4">03 — PROJECTS</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Selected Work</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Mobile Sales Data Analytics",
              tech: "React · Supabase · Recharts",
              desc: "Interactive dashboard visualizing multi-year mobile sales data with real-time updates."
            },
            {
              title: "Web Development Courses Portal",
              tech: "HTML5 · CSS3 · React · Node.js",
              desc: "Responsive course portal with intuitive navigation and cross-device compatibility."
            },
            {
              title: "Summer Tech Project",
              tech: "HTML5 · CSS3 · JS ES6+",
              desc: "Responsive SPA with 30% better engagement and 20% performance improvement."
            },
            {
              title: "Lifeboat Android App",
              tech: "Kotlin · Android Studio",
              desc: "Production-deployed mobile app with optimized performance and modern UI/UX."
            }
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface rounded-2xl border border-surface hover:border-accent transition-all hover:scale-[1.02] group"
            >
              <h3 className="text-2xl font-bold group-hover:text-accent transition">{p.title}</h3>
              <p className="text-xs text-accent mt-2 tracking-wider">{p.tech}</p>
              <p className="text-textSecondary mt-4 text-sm">{p.desc}</p>
              <ExternalLink className="mt-6 text-textSecondary group-hover:text-accent transition" size={18} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-accent text-sm tracking-[0.3em] mb-4">04 — SKILLS</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Tech Stack</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "Frontend", items: "React.js, HTML5, CSS3, JavaScript" },
            { title: "Backend", items: "Node.js, MongoDB" },
            { title: "Mobile", items: "Kotlin, Android Studio" },
            { title: "Data", items: "Python, Excel, Recharts" },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-surface rounded-xl border border-surface hover:border-accent transition">
              <h3 className="text-accent text-sm tracking-wider mb-3">{s.title.toUpperCase()}</h3>
              <p className="text-sm text-textSecondary">{s.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <p className="text-accent text-sm tracking-[0.3em] mb-4">05 — CONTACT</p>
        <h2 className="text-4xl md:text-7xl font-bold mb-8">
          Let's build something <span className="text-accent">engineered</span> to last.
        </h2>

        <div className="flex flex-col items-center gap-4 mt-12 text-textSecondary">
          <a href="mailto:chaluvadiakshaybabu813@gmail.com" className="flex items-center gap-3 hover:text-accent transition">
            <Mail size={18} /> chaluvadiakshaybabu813@gmail.com
          </a>
          <a href="tel:7671906956" className="flex items-center gap-3 hover:text-accent transition">
            <Phone size={18} /> +91 7671906956
          </a>
          <p className="flex items-center gap-3">
            <MapPin size={18} /> Warangal, Telangana
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/AKSHAY813" target="_blank" className="p-3 border border-surface rounded-full hover:border-accent hover:text-accent transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/chaluvadiakshaybabu-undefined-49365a353/" target="_blank" className="p-3 border border-surface rounded-full hover:border-accent hover:text-accent transition">
            <Linkedin size={20} />
          </a>
        </div>

        <p className="mt-20 text-xs text-textSecondary tracking-wider">
          © 2025 AKSHAY BABU · ENGINEERED EXPERIENCES
        </p>
      </section>

    </main>
  )
}