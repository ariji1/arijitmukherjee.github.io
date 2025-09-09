import { motion } from "framer-motion";

export function SkillProgress({ skill, level, category }) {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400">{category}</span>
    </div>
  );
}
