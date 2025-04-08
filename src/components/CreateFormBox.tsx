import React, { useState, useEffect } from "react";

const CreateFormBox = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (for SSR)
    if (typeof window !== "undefined") {
      const checkIfMobile = () => setIsMobile(window.innerWidth < 768);

      // Initial check
      checkIfMobile();

      // Add event listener for window resize
      window.addEventListener("resize", checkIfMobile);

      // Cleanup function
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);

  return (
    <div
      className=" rounded-[10px] gap-[10px] bg-[#79225C] flex items-center"
      style={{
        height: isMobile ? "72px" : "180px",
        transition: "height 0.3s ease",
        padding: "9px",
      }}
    >
      {/* Left side - Square box with + sign */}
      <div
        className="flex-[1] h-full rounded-[10px] flex items-center justify-center"
        style={{
          backgroundColor: "#fff",
          aspectRatio: "1/1",
          maxHeight: "100%",
        }}
      >
        <span
          className="
          text-white font-bold flex items-center justify-center
          border-[2px] border-[#79225C] rounded-[5px] text-[clamp(14px,2vw,18px)]
        "
          style={{
            paddingRight: "8px",
            paddingLeft: "8px",
            paddingBottom: "2px",
          }}
        >
          +
        </span>
      </div>

      {/* Right side - Content */}
      <div className="flex-[5] flex flex-col justify-start">
        <h3
          className="tracking-normal align-middle mb-[2px]"
          style={{
            fontFamily: "Unbounded-Regular",
            fontSize: "clamp(14px, 2.5vw, 24px)",
            lineHeight: "clamp(20px, 3vw, 28px)",
            color: "#FFFFFF",
            margin: 0,
            marginBottom: isMobile ? "5px" : "20px",
          }}
        >
          Create new
        </h3>
        <p
          className="tracking-normal align-middle"
          style={{
            fontFamily: "WorkSans-Regular",
            fontWeight: 400,
            fontSize: "clamp(12px, 2vw + 4px, 20px)",
            lineHeight: "clamp(18px, 2.5vw, 24px)",
            color: "#FFFFFF",
            margin: 0,
            marginTop: isMobile ? "5px" : "20px",
          }}
        >
          Build a form from scratch
        </p>
      </div>
    </div>
  );
};

export default CreateFormBox;
