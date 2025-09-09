import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceCard({ role, company, duration, location, achievements, technologies }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{role}</h3>
          <h4 className="text-lg text-blue-600 dark:text-blue-400">{company}</h4>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{duration}</span>
          </div>
          {location && (
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{location}</span>
            </div>
          )}
        </div>
      </div>

      <ul className="list-disc list-inside mb-4 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">
            {achievement}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
