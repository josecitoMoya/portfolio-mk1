//"use client"

import { motion } from "framer-motion";

//variantes
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//Calculamos la demora
const reverseIndex = (index) => {
  const totalSteps = 6; //cantidad de escalones
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* se renderizan 6 divs con movimiento, cada uno representa un escalon de las escaleras
      
      Cada div va a tener la misma animacion definida por StairAnimation, la demora de cada div se va a calcular basandonos en su indice invertido, para crear un efecto*/}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
