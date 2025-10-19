import React from "react";

export default function Logo({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="4" height="4" fill="currentColor" />
      <rect x="4" y="4" width="4" height="4" fill="currentColor" />
      <rect y="8" width="4" height="4" fill="currentColor" />
      <rect x="8" width="4" height="4" fill="currentColor" />
      <rect x="12" y="4" width="4" height="4" fill="currentColor" />
      <rect x="8" y="8" width="4" height="4" fill="currentColor" />
      <rect x="12" y="12" width="4" height="4" fill="currentColor" />
    </svg>
  );
}
