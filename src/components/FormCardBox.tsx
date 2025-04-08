import React, { useEffect, useState } from "react";
import { FiMoreVertical, FiCopy, FiTrash } from "react-icons/fi";

type FormCardBoxProps = {
  title: string;
  description: string;
  bgColor?: string;
  imageUrl?: string;
  onDuplicate?: () => void;
  onDelete?: () => void;
};

const FormCardBox: React.FC<FormCardBoxProps> = ({
  title,
  description,
  bgColor = "#79225C",
  imageUrl,
  onDuplicate,
  onDelete,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <div
      className="rounded-[10px] gap-[10px] flex items-center relative"
      style={{
        backgroundColor: bgColor,
        height: isMobile ? "72px" : "180px",
        transition: "height 0.3s ease",
        padding: "9px",
      }}
    >
      {/* Action icon top-right */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "93%" : "97.5%",
          top: isMobile ? "20%" : "15%",
          bottom: "0px",
          right: "0px",
          color: "black",
          cursor: "pointer",
          zIndex: 100,
        }}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <FiMoreVertical size={20} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="absolute top-10 right-2 z-50 bg-white"
          style={{
            height: "65px",
            borderRadius: "10px",
            width: "160px",
            padding: "8px 0",
            backgroundColor: "#fff",
            boxShadow:
              "0px 2px 8px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(0, 0, 0, 0.08)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            position: "absolute",
            left: isMobile ? "55%" : "88.5%",
            top: isMobile ? "14%" : "12%",
            bottom: "0px",
            right: "0px",
            color: "black",
            cursor: "pointer",
            zIndex: 100,
          }}
        >
          {/* Duplicate Option */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onDuplicate?.();
              setIsModalOpen(false);
            }}
            className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700"
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              margin: "0 4px",
            }}
          >
            <FiCopy className="mr-3 text-gray-500" size={16} />
            <span className="text-sm font-medium">Duplicate</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mx-3 my-1"></div>

          {/* Delete Option */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.();
              setIsModalOpen(false);
            }}
            className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer text-red-500"
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              margin: "0 4px",
            }}
          >
            <FiTrash className="mr-3" size={16} />
            <span className="text-sm font-medium">Delete</span>
          </div>
        </div>
      )}

      {/* Image Box */}
      <div className="flex-[1] h-full rounded-[10px] flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="box"
            className="object-cover w-full h-full rounded-[10px]"
            style={{ aspectRatio: "1/1" }}
          />
        ) : (
          <div
            className="bg-white w-full h-full rounded-[10px]"
            style={{ aspectRatio: "1/1" }}
          />
        )}
      </div>

      {/* Text Section */}
      <div className="flex-[5] flex flex-col justify-start">
        <h3
          className="font-normal text-[#292929] text-[clamp(12px,2.5vw, 24px)] leading-[clamp(18px,3vw, 28px)] tracking-normal align-middle mb-[clamp(5px,1.5vw,20px)]
"
          style={{
            fontFamily: "Unbounded-Regular",
            marginBottom: isMobile ? "5px" : "20px",
          }}
        >
          {title}
        </h3>
        <p
          className="font-normal text-[#828282]text-[clamp(14px,1.5vw,16px)] leading-[clamp(20px,2.5vw,24px)] tracking-normal align-middle mt-[clamp(5px,1vw,20px)] opacity-80"
          style={{
            fontFamily: "WorkSans-Regular",
            marginTop: isMobile ? "5px" : "20px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FormCardBox;
