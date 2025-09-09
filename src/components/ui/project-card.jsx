import { motion } from "framer-motion";

export function ProjectCard({ title, description, technologies, link, metrics }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 hover:shadow-xl transition-all">
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      {metrics && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
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
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Learn More →
        </a>
      )}
    </motion.div>
  );
}
