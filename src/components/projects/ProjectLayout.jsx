import { motion } from "framer-motion";
import CustomBtn from "../CustomBtn";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({
  name,
  image,
  techStack,
  description,
  githubLink,
  demoLink,
}) => {
  return (
    <motion.div
      variants={item}
      className=" text-sm md:text-base flex flex-col md:flex-row items-center md:items-start justify-start w-full relative rounded-lg overflow-hidden  custom-bg"
    >
      <div className="w-full h-full md:pt-8 md:pl-8">
        <img src={image} alt={name} className="md:rounded-md" />
      </div>
      <div className="flex flex-col items-start justify-center space-x-2 p-2 md:p-6">
        <h2 className="text-accent text-4xl font-bold px-3">{name}</h2>
        <p className="text-muted italic p-2 text-xs">
          <span className="font-bold">TECHSTACK:</span>
          {techStack}
        </p>
        <p className="text-muted px-1">{description}</p>
        <div className="pt-5 flex">
          <CustomBtn color={"black"} text={"Github"} link={githubLink} />
          <CustomBtn color={"purple"} text={"Live Demo"} link={demoLink} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectLayout;
