import { motion } from "framer-motion";
import { Card } from "./card";

export function TimelineItem({ year, title, subtitle, description, isLeft = true }) {
  return (
    <motion.div
      className={`flex ${isLeft ? "flex-row" : "flex-row-reverse"} w-full items-center justify-center`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-5/12">
        {isLeft && (
          <Card className="p-4">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{subtitle}</p>
            <p className="mt-2 text-sm">{description}</p>
          </Card>
        )}
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full" />
      </div>
      <div className="w-5/12">
        {!isLeft && (
          <Card className="p-4">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{subtitle}</p>
            <p className="mt-2 text-sm">{description}</p>
          </Card>
        )}
      </div>
    </motion.div>
  );
}
