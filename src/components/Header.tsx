import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

export default function Header({ title, showBack = true }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex items-center justify-between px-4 py-3 shadow-sm bg-white sticky top-0 z-50"
    >
      {/* Back Icon */}
      {showBack ? (
        <div
          onClick={() => navigate(-1)}
          role="button"
          tabIndex={0}
          className="text-gray-700 hover:text-[#951B81] transition duration-200 flex items-center cursor-pointer"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate(-1);
          }}
        >
          <FiArrowLeft size={24} />
        </div>
      ) : (
        <div className="w-[24px]" />
      )}

      {/* Title */}
      <h1
        className="text-[#292929] text-center mx-auto leading-none"
        style={{
          fontFamily: "WorkSans-Regular",
          fontWeight: 400,
          fontSize: "clamp(18px, 2.5vw, 20px)",
          lineHeight: "clamp(24px, 3vw, 28px)",
          marginTop: "10px",
        }}
      >
        {title}
      </h1>

      {/* Right side spacer */}
      <div className="w-[24px]" />
    </motion.div>
  );
}
