import { CheckCircle, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const CustomBtn = ({ color, text, link }) => {
  return (
    <Link href={link}>
      <div
        className="rounded-md p-2 m-2 flex"
        style={{ backgroundColor: color }}
      >
        {text === "Github" ? (
          <Github strokeWidth={1.5} />
        ) : (
          <CheckCircle strokeWidth={1.5} />
        )}
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default CustomBtn;
