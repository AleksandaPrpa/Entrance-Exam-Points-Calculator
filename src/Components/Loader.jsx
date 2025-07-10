import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex space-x-4">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-6 h-6 rounded-full bg-blue-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Loader;
