import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function PublicationCard({ title, citation, link, abstract, metrics }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">{citation}</p>
      
      {abstract && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Abstract:</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{abstract}</p>
        </div>
      )}

      {metrics && metrics.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Impact:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
            {metrics.map((metric, index) => (
              <li key={index}>{metric}</li>
            ))}
          </ul>
        </div>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read Paper <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      )}
    </motion.div>
  );
}
