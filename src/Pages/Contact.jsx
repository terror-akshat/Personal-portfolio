import React from "react";
import Login from "../component/Login";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Login />
    </motion.div>
  );
};

export default Contact;
