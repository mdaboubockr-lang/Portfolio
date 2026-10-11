
import React from "react";

export default function WorkCard({
  number,
  title,
  description,
  Icon,
}) {
  return (
    <article className="group rounded-2xl border border-blue-500/80 bg-[#031125]/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400 hover:bg-[#061a32] hover:shadow-[0_12px_35px_rgba(0,153,255,0.12)] sm:p-8">
      {/* Card top */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-lg font-bold text-cyan-400">
          {number}
        </span>

        {Icon && (
          <Icon
            size={40}
            strokeWidth={1.7}
            aria-hidden="true"
            className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </div>

      {/* Card content */}
      <h3 className="mb-4 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
        {title}
      </h3>

      <p className="text-[15px] leading-7 text-blue-200/80 sm:text-base sm:leading-[1.8]">
        {description}
      </p>
    </article>
  );
}