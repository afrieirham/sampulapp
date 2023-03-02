import React from "react";

function Pill({ children }) {
  return (
    <p className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-500">
      {children}
    </p>
  );
}

export default Pill;
