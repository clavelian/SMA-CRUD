import { useEffect, useState } from "react";
import { SectionProps } from "./interface/index";

const Section = (props: SectionProps) => {
  const [data] = useState({ ...props });

  useEffect(() => {
    console.log("Section component", props, data);
  }, []);

  return (
    <section className="container mx-auto">
      <section className="max-w-screen-md mx-auto py-10">
        <h1 className="title text-center">{data.header}</h1>
        <p className="mb-20">{data.description}</p>
      </section>
    </section>
  );
};

export default Section;
