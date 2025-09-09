import { motion } from "framer-motion";

export function SkillBar({ skill, level, category }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
        />
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 inline-block">{category}</span>
    </div>
  );
}
