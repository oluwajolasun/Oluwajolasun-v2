import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Skills from "../components/Skills";

const SkillsPage = () => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const grid = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];

  const size = 70;
  const gap = 15;

  return (
    <div className="container mx-auto flex flex-col justify-between overflow-x-clip py-10 lg:flex-row z-50">
      <div>
        <h1 className="sticky top-[70px] mb-4 text-3xl font-bold uppercase text-primary md:text-4xl">
          Skills
        </h1>
      </div>
      <div className="flex h-fit flex-col lg:w-8/12">
        <p className="mx-auto w-[325px] pb-6 text-secondary">
          {"<draggables>"}
        </p>
        <motion.div
          animate={{ "--base-hue": 360 }}
          initial={{ "--base-hue": 0 }}
          transition={{ duration: 10, loop: Infinity, ease: "linear" }}
          style={{ width: "100%", height: "100%" }}
        >
          <motion.div
            style={{
              display: "flex",
              width: (size + gap) * 4 - gap,
              height: (size + gap) * 5 - gap,
              top: "0",
              left: "0",
              perspective: 500,
              margin: "auto",
              flexDirection: "row",
            }}
          >
            {grid.map((row, rowIndex) =>
              row.map((_item, colIndex) => (
                <Skills
                  x={x}
                  y={y}
                  active={active}
                  setActive={setActive}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  key={rowIndex + colIndex}
                />
              )),
            )}
          </motion.div>
        </motion.div>
        <p className="mx-auto mt-6 w-[325px] text-secondary">
          {"</draggables>"}
        </p>
      </div>
    </div>
  );
};
export default SkillsPage;
