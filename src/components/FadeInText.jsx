import { useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function FadeInText({ children }) {
  const ref = useRef(null);
  //   const tabElementref = useRef<HTMLDivElement>(null);
  //   const keyboardElementref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 end", "end start"],
  });
  //   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  useTransform(scrollYProgress, (value) => {
    // console.log(value);
    if (value >= 0.08) {
      //   ref.current?.classList.remove(..."out-of-view".split(" "));
      ref.current?.classList.add("in-view");
    } else {
      ref.current?.classList.remove("in-view");
      //   ref.current?.classList.add(..."out-of-view".split(" "));
    }
  });
  return (
    <div ref={ref} className="fade-element">
      {children}
    </div>
  );
}

export default FadeInText;
