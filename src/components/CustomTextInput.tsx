const CustomEmailInput = ({
  label,
  value,
  onChange,
  placeholder,
  errorMessage,
  showIcon,
  type = "text",
  isValid = true,
  showValidation = true,
  icon,
  onIconClick = () => {},
  disabled = false,
  secureTextEntry = false,
  isMandatory = false,
  inputStyle = {},
}) => {
  return (
    <div className="w-full gap-[5px]">
      {/* Label */}
      {label && (
        <label
          className="block font-normal text-[14px] leading-[20px] text-[#292929] align-middle mb-1"
          style={{
            fontFamily: "WorkSans-Regular",
          }}
        >
          {label}
          {isMandatory && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Input wrapper */}
      <div
        className={`relative w-full flex items-center outline-none border ${
          showValidation
            ? isValid
              ? "border-green-400"
              : "border-red-400"
            : "border-gray-300"
        } rounded-lg px-4 py-3 mt-[10px]`}
        style={{
          borderRadius: "8px",
          marginBottom: errorMessage ? "4px" : "10px",
          ...inputStyle,
        }}
      >
        <input
          id="inputID"
          type={secureTextEntry ? "password" : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className="flex-1 font-sans font-normal text-[14px] leading-[20px] placeholder-gray-400/100 placeholder:font-sans placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] text-gray-800 outline-none bg-transparent border-none focus:ring-0 px-4 py-3 align-middle"
          style={{
            padding: "14px",
            letterSpacing: "0%",
            color: "#000",
            fontFamily: "WorkSans-Regular",
          }}
        />

        {/* Optional right icon */}
        {showIcon && icon && (
          <span
            className="flex-shrink-0 ml-2 cursor-pointer"
            onClick={onIconClick}
            style={{
              marginRight: "14px",
              alignSelf: "center",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "5px",
            }}
          >
            {icon}
          </span>
        )}
      </div>

      {/* Error message */}
      {errorMessage && !isValid && (
        <p className="text-xs text-red-500 ml-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default CustomEmailInput;
