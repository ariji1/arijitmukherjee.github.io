import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({ title, description, metrics, technologies, githubLink, demoLink, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        {metrics && metrics.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Key Metrics:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
              {metrics.map((metric, index) => (
                <li key={index}>{metric}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
