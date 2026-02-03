import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const floatAnimation = {
  y: [0, -6, 0],
};

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* 📞 Call Button */}
      <motion.a
        href="tel:+919843021579"
        aria-label="Call Now"
        className="relative bg-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 1, scale: 1, ...floatAnimation }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          y: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.18,
          rotate: -6,
          boxShadow: "0px 0px 25px rgba(37,99,235,0.7)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone className="w-6 h-6" />

        {/* Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-lg"></span>
      </motion.a>

      {/* 💬 WhatsApp Button */}
      <motion.a
        href="https://wa.me/919843021579"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
          ...floatAnimation,
        }}
        transition={{
          opacity: { duration: 0.6 },
          scale: {
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.22,
          rotate: 6,
          boxShadow: "0px 0px 30px rgba(34,197,94,0.8)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />

        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></span>
      </motion.a>

    </div>
  );
}

export default FloatingActions;
