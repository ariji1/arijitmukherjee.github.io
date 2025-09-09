import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, BookOpen } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: (
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Arijit Mukherjee</h1>
        <h2 className="text-xl text-gray-600">AI Solutions Architect | Data Scientist</h2>
        <p className="text-gray-500">Specializing in scalable AI, NLP, and ML pipelines with 8+ years of experience.</p>
      </div>
    ),
    about: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          8+ years of experience in machine learning, NLP, forecasting, and large language model fine-tuning. Expertise in Python, R, TensorFlow, PyTorch, and deployment of AI/ML solutions across AWS, Azure, and GCP.
        </p>
      </div>
    ),
    experience: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold">Senior Data Scientist & Consultant — HCL Technologies (AbbVie Inc.)</h3>
            <p className="text-sm text-gray-500">July 2024 – Present</p>
            <ul className="list-disc ml-5 mt-2 text-gray-600 text-sm space-y-1">
              <li>Built task-specific AI agents with RAG pipelines → 40% faster query resolution.</li>
              <li>Fine-tuned PHI-4 models on 10k+ ICD-10-CM/RFV records → 30% lower hallucination.</li>
              <li>CI/CD pipelines with Azure DevOps & GitHub Actions → 50% shorter release cycles.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold">Data Science Consultant — Accenture</h3>
            <p className="text-sm text-gray-500">June 2021 – June 2024</p>
            <ul className="list-disc ml-5 mt-2 text-gray-600 text-sm space-y-1">
              <li>Designed Multi-Agent RAG framework (Published on arXiv).</li>
              <li>Cut processing errors by 80% with hallucination-minimized framework (IEEE Xplore).</li>
              <li>Optimized workflows with Snowflake & DAG pipelines → 30% faster data ops.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    ),
    projects: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects & Publications</h2>
        <ul className="list-disc ml-5 text-gray-600 space-y-2">
          <li><a href="https://arxiv.org/abs/2405.03963" className="text-blue-600">Multi-Agent RAG Framework Using Knowledge Graphs (arXiv)</a></li>
          <li><a href="https://arxiv.org/abs/2311.07592" className="text-blue-600">Hallucination-Minimized Data Context Framework (IEEE Xplore)</a></li>
          <li>Interactive Churn Prediction Dashboard (Streamlit)</li>
          <li>Credit Card Fraud Detection using Random Cut Forest</li>
        </ul>
      </div>
    ),
    skills: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p><strong>Frameworks:</strong> TensorFlow, PyTorch, Keras, MXNet</p>
        <p><strong>NLP:</strong> BERT, GPT-3.5, GPT-4, spaCy, NLTK</p>
        <p><strong>Cloud & Tools:</strong> AWS SageMaker, Azure ML, GCP Vertex AI, Docker, Kubernetes</p>
        <p><strong>Databases:</strong> SQL, Snowflake, MongoDB</p>
      </div>
    ),
    education: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Education & Certifications</h2>
        <ul className="list-disc ml-5 text-gray-600 space-y-2">
          <li>MS in Information Technology (ML/AI) — IIIT Hyderabad</li>
          <li>B.Tech in Electronics & Communication — WBUT</li>
          <li>AWS Machine Learning Specialty Certification</li>
          <li>Kellogg University — Applying Analytics and AI</li>
        </ul>
      </div>
    ),
    contact: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="flex space-x-4">
          <a href="mailto:ariji1job@gmail.com"><Mail /></a>
          <a href="https://www.linkedin.com/in/arijit8b7ba184/"><Linkedin /></a>
          <a href="https://github.com/ariji1"><Github /></a>
          <a href="https://arxiv.org/" target="_blank"><BookOpen /></a>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <nav className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
        {Object.keys(sections).map((key) => (
          <Button key={key} variant={activeSection === key ? "default" : "outline"} onClick={() => setActiveSection(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        ))}
      </nav>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <Card className="max-w-3xl mx-auto p-6 shadow-xl rounded-2xl">
          <CardContent>{sections[activeSection]}</CardContent>
        </Card>
      </motion.div>

      <div className="text-center text-gray-400 text-sm mt-10">More incoming…</div>
    </div>
  );
}
