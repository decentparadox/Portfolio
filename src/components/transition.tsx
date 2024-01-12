import { motion } from "framer-motion";

const transition = (OriginalComponent:any) => {
  return () => (
    <>
      <div className="bg"></div>
      <motion.div
        initial={{
          // y: 200,
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          transition: { duration: 0.25, ease: [0.83, 0, 0.17, 1] },
        }}
        animate={{
          // y: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          transition: { duration: 0.1, ease: [0.83, 0, 0.17, 1] },
        }}
        exit={{
          // y: -200,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] },
        }}
        style={{
          position: "relative",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <OriginalComponent />
      </motion.div>
    </>
  );
};

export default transition;
