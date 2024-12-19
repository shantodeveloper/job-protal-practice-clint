import { easeOut } from 'motion';
import { motion } from 'motion/react';
import team1 from '../../assets/img/biriyani.png';
import tean2 from '../../assets/img/burger.png';
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 h-[600px]">
        <div className="hero-content flex-col lg:flex-row-reverse flex-1">
          <div className="w-1/2">
            <motion.img
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              src={team1}
              className="max-w-sm rounded-lg shadow-2xl"
            />

            <motion.img
              animate={{ x: [0, 80, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              src={tean2}
              className="max-w-sm  rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <motion.h1
              animate={{ x: 100 }}
              transition={{
                duration: 2,
                delay: 2,
                ease: easeOut,
                repeat: Infinity,
              }}
              className="text-5xl font-bold"
            >
              Latest Job Up coming{' '}
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
