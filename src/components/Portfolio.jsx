import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, BookOpen, Award, Brain, Code, Database } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";
import { SkillBar } from "./ui/skill-bar";
import { TimelineItem } from "./ui/timeline-item";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skillCategories = {
    "Machine Learning": [
      { name: "TensorFlow/PyTorch", level: 95 },
      { name: "Natural Language Processing", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "Time Series Analysis", level: 88 }
    ],
    "Cloud & DevOps": [
      { name: "AWS/Azure/GCP", level: 92 },
      { name: "Docker/Kubernetes", level: 85 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "MLOps", level: 90 }
    ],
    "Programming": [
      { name: "Python", level: 95 },
      { name: "R", level: 85 },
      { name: "SQL", level: 90 },
      { name: "JavaScript/React", level: 80 }
    ]
  };

  const sections = {
    home: (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <motion.img
          src="https://github.com/ariji1.png"
          alt="Arijit Mukherjee"
          className="w-32 h-32 rounded-full mx-auto shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Arijit Mukherjee
          </h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300 mt-2">
            AI Solutions Architect | Data Scientist
          </h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Pioneering AI solutions with 8+ years of experience in machine learning, NLP, and scalable ML pipelines. 
          Published researcher and certified cloud architect specializing in enterprise AI implementations.
        </p>
        <div className="flex justify-center space-x-4 pt-4">
          <Button onClick={() => setActiveSection("contact")}>Get in Touch</Button>
          <Button variant="outline" onClick={() => setActiveSection("projects")}>View Projects</Button>
        </div>
      </motion.div>
    ),
    about: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-4">
            <CardContent>
              <h3 className="flex items-center text-xl font-semibold mb-3">
                <Brain className="mr-2" /> Expertise
              </h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Machine Learning & Deep Learning</li>
                <li>Natural Language Processing</li>
                <li>Large Language Models & RAG</li>
                <li>MLOps & AI Infrastructure</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent>
              <h3 className="flex items-center text-xl font-semibold mb-3">
                <Award className="mr-2" /> Achievements
              </h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>2 Research Papers Published</li>
                <li>AWS ML Specialty Certified</li>
                <li>40+ ML Models in Production</li>
                <li>10+ Enterprise AI Solutions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          I specialize in building and deploying scalable AI solutions that drive business value. 
          My expertise spans from traditional ML to cutting-edge LLM applications, with a focus 
          on creating robust, production-ready systems.
        </p>
      </div>
    ),
    experience: (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Professional Journey
        </h2>
        <div className="space-y-12">
          <TimelineItem
            title="Senior Data Scientist & Consultant"
            subtitle="HCL Technologies (AbbVie Inc.) | July 2024 – Present"
            description="Led development of task-specific AI agents with RAG pipelines, achieving 40% faster query resolution. Fine-tuned PHI-4 models with 30% lower hallucination rates."
            isLeft={true}
          />
          <TimelineItem
            title="Data Science Consultant"
            subtitle="Accenture | June 2021 – June 2024"
            description="Designed groundbreaking Multi-Agent RAG framework published on arXiv. Reduced processing errors by 80% through innovative hallucination-minimized framework."
            isLeft={false}
          />
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Technical Skills
        </h2>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center">
              {category === "Programming" ? <Code className="mr-2" /> :
               category === "Cloud & DevOps" ? <Database className="mr-2" /> :
               <Brain className="mr-2" />}
              {category}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  color={
                    category === "Programming" ? "bg-green-500" :
                    category === "Cloud & DevOps" ? "bg-purple-500" :
                    "bg-blue-500"
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
    projects: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Featured Projects & Publications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-4 hover:shadow-lg transition-shadow">
            <CardContent>
              <h3 className="text-xl font-semibold">Multi-Agent RAG Framework</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Published on arXiv</p>
              <p className="mt-2">Novel approach to knowledge retrieval using distributed agents and graph networks.</p>
              <a href="https://arxiv.org/abs/2405.03963" className="text-blue-500 hover:text-blue-600 mt-2 inline-block">
                Read Paper →
              </a>
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow">
            <CardContent>
              <h3 className="text-xl font-semibold">Hallucination-Minimized Framework</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Published in IEEE Xplore</p>
              <p className="mt-2">Framework for reducing hallucinations in large language models.</p>
              <a href="https://arxiv.org/abs/2311.07592" className="text-blue-500 hover:text-blue-600 mt-2 inline-block">
                Read Paper →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
    education: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Education & Certifications
        </h2>
        <div className="space-y-4">
          <Card className="p-4">
            <CardContent>
              <h3 className="text-xl font-semibold">MS in Information Technology (ML/AI)</h3>
              <p className="text-gray-500 dark:text-gray-400">IIIT Hyderabad</p>
              <p className="mt-2">Specialized in Machine Learning and Artificial Intelligence</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent>
              <h3 className="text-xl font-semibold">Professional Certifications</h3>
              <ul className="list-disc ml-5 mt-2 space-y-2">
                <li>AWS Machine Learning Specialty</li>
                <li>Kellogg University - Applying Analytics and AI</li>
                <li>Google Cloud Professional Data Engineer</li>
                <li>Azure AI Fundamentals</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
    contact: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Feel free to reach out for collaborations, consulting opportunities, or just to say hi!
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:ariji1job@gmail.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <Mail className="h-5 w-5" />
            <span>ariji1job@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/arijit8b7ba184/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn Profile</span>
          </a>
          <a href="https://github.com/ariji1" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a href="https://arxiv.org/" target="_blank" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <BookOpen className="h-5 w-5" />
            <span>Publications</span>
          </a>
        </div>
      </div>
    )
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-200`}>
      <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      
      <nav className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
        {Object.keys(sections).map((key) => (
          <Button
            key={key}
            variant={activeSection === key ? "default" : "outline"}
            onClick={() => setActiveSection(key)}
            className={darkMode ? "dark" : ""}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto p-6 shadow-xl rounded-2xl dark:bg-gray-800 dark:text-white">
            <CardContent>{sections[activeSection]}</CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
}
