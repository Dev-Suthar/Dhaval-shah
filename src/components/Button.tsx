import React, { useCallback } from "react";

interface ButtonProps {
  title: string;
  onPress: (e?: React.FormEvent) => void;
  disabled?: any;
  btnStyle?: string; // Additional Tailwind classes for button
  textStyle?: string; // Additional Tailwind classes for text
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  btnStyle = "",
  textStyle = "",
}) => {
  // Debounce onPress function
  const handlePress = useCallback(() => {
    if (!disabled) {
      onPress();
    }
  }, [disabled, onPress]);

  return (
    <button
      onClick={handlePress}
      className={`w-full gap-[5px] 
        bg-[#90246C] 
        focus:outline-none focus:ring-0
        ${btnStyle} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      style={{
        border: "none",
        borderRadius: "6px",
      }}
      disabled={disabled}
    >
      <span
        className={`text-white ${textStyle} my-[8px]`}
        style={{
          fontFamily: "WorkSans-Regular",
          fontWeight: 400,
          fontSize: "clamp(16px, 2vw + 8px, 24px)",
          lineHeight: "24px",
          letterSpacing: "0",
          verticalAlign: "middle",
          color: "white",
          textAlign: "center",
          display: "block",
        }}
      >
        {title}
      </span>
    </button>
  );
};

export default Button;
