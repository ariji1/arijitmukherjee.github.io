import { motion } from "framer-motion";

export function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-8 flex gap-4"
        >
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full" />
            {index !== experiences.length - 1 && <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-700" />}
          </div>
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
              <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">{exp.company}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.duration}</p>
              <div className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                    • {achievement}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
