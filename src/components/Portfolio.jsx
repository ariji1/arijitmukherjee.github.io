import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, BookOpen, Award, Brain, Code, Database } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";
import { SkillBar } from "./ui/skill-bar";
import { TimelineItem } from "./ui/timeline-item";
import { ProjectCard } from "./ui/ProjectCard";
import { PublicationCard } from "./ui/PublicationCard";

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] flex flex-col items-center justify-center relative"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        >
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <img
            src="https://github.com/ariji1.png"
            alt="Arijit Mukherjee"
            className="w-40 h-40 rounded-full shadow-2xl relative border-4 border-white dark:border-gray-800"
          />
        </motion.div>

        <motion.div
          className="text-center mt-8 relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mb-4 animate-gradient-x">
              Arijit Mukherjee
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
              AI Solutions Architect & Data Scientist
            </h2>
          </motion.div>

          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            👋 Hi! I'm pioneering AI solutions with 8+ years of experience in machine learning, 
            NLP, and scalable ML pipelines. Published researcher and certified cloud architect 
            specializing in enterprise AI implementations.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={() => setActiveSection("contact")}
              className="relative overflow-hidden group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg transform transition-all hover:-translate-y-1"
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => setActiveSection("projects")}
              className="relative overflow-hidden group px-8 py-3 border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 rounded-full hover:shadow-lg transform transition-all hover:-translate-y-1"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mt-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: <Github size={24} />, url: "https://github.com/ariji1" },
              { icon: <Linkedin size={24} />, url: "https://linkedin.com/in/ariji1" },
              { icon: <Mail size={24} />, url: "mailto:ariji1job@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Enterprise RAG Framework"
            description="Advanced RAG system with multi-agent architecture for efficient document processing and query resolution."
            metrics={[
              "40% reduction in query resolution time",
              "35% improvement in accuracy",
              "50% reduction in processing errors"
            ]}
            technologies={["RAG", "LangChain", "Azure ML", "Elasticsearch", "FastAPI"]}
            githubLink="https://github.com/ariji1/rag-framework"
            demoLink="https://rag-demo.arijitmukherjee.com"
          />
          <ProjectCard
            title="LLM Fine-tuning Pipeline"
            description="End-to-end pipeline for domain-specific LLM adaptation using LoRA/QLoRA techniques."
            metrics={[
              "15% improvement in inference accuracy",
              "20% reduction in compute costs",
              "30% reduction in hallucination rates"
            ]}
            technologies={["PyTorch", "LoRA", "MLflow", "AWS SageMaker", "Hugging Face"]}
            githubLink="https://github.com/ariji1/llm-finetuning"
          />
        </div>
      </motion.div>
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
    publications: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Research Publications
        </h2>
        <div className="space-y-6">
          <PublicationCard
            title="LLM-based Methods for Sustainability Information Extraction"
            citation="arXiv:2405.03963 (2024)"
            abstract="Novel approach to automated understanding of environmental data for ESG risk analysis using large language models"
            metrics={[
              "Featured in top AI conferences",
              "Cited by 15+ research papers",
              "Implemented by 3 major financial institutions"
            ]}
            link="https://arxiv.org/abs/2405.03963"
          />
          <PublicationCard
            title="Grounding Large Language Models with Structured Domain-Specific Data"
            citation="arXiv:2311.07592 (2023)"
            abstract="Research on scalable techniques for financial text understanding and domain adaptation"
            metrics={[
              "Referenced in industry whitepapers",
              "Adopted by 2 Fortune 500 companies",
              "Achieved 40% improvement in domain-specific tasks"
            ]}
            link="https://arxiv.org/abs/2311.07592"
          />
        </div>
      </motion.div>
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <nav className="sticky top-4 z-50 max-w-4xl mx-auto">
        <motion.div
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-lg rounded-full px-4 py-2 flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex space-x-4 items-center overflow-x-auto py-2">
            {Object.keys(sections).map((key, index) => (
              <motion.button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all relative ${
                  activeSection === key
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === key && (
                  <motion.div
                    className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </motion.button>
            ))}
          </div>
          
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </motion.div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-2xl shadow-2xl -z-10"
              layoutId="contentBackground"
              transition={{ duration: 0.3 }}
            />
            <div className="p-8 relative">
              {sections[activeSection]}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://github.com/ariji1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ariji1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ariji1job@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
          <motion.p 
            className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            © {new Date().getFullYear()} Arijit Mukherjee. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
